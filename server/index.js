const express = require('express');
const db = require('./config/db.js')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
});

// Route to get all posts
app.get('/:userId/main/top',(req,res) =>{
  const userId = req.params.userId;
  const sql =`
  SELECT a.title, a.score AS score, a.imgurl, a.anime_id AS id, ual.score AS yourScore
FROM anime a
LEFT JOIN anime_list ual ON a.anime_id = ual.anime_id AND ual.user_id = ?
ORDER BY a.score DESC;

  `
  db.query(sql,userId,(err,results)=>{
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  })
})
app.get('/animeByGenre/:genreName', (req, res) => {
    const genreName = req.params.genreName;
    
    const sql = `
      SELECT a.title
      FROM anime a
      JOIN anime_genre ag ON a.anime_id = ag.anime_id
      JOIN genre g ON ag.genre_id = g.genre_id
      WHERE g.name = ?;
    `;
    
    db.query(sql, genreName, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
});

app.get('/api/animeByTitle/:title', (req, res) => {
    const title = req.params.title;
    
    const sql = `
      SELECT *
      FROM anime
      WHERE title LIKE ?;
      
    `;
    
    db.query(sql, `%${title}%`, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
});
app.get('/:userId/mylist', (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT a.title, a.score AS score, a.imgurl,a.anime_id as id ,ual.score AS yourScore
    FROM anime a
    JOIN anime_list ual ON a.anime_id = ual.anime_id
    WHERE ual.user_id = ?
    order by yourScore desc;
  `;

  db.query(sql, userId, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.get('/api/:userId/anime/:animeId', (req, res) => {
  const userId = req.params.userId;
  const animeId = req.params.animeId;

  const sql = `
  SELECT 
  a.*,
  MAX(ual.score) AS Your_Score,
  ual.status AS Your_Status,
  GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS character_names
FROM anime a
LEFT JOIN anime_list ual ON a.anime_id = ual.anime_id AND ual.user_id = ?
LEFT JOIN anime_character ac ON a.anime_id = ac.anime_id
LEFT JOIN project_db.character c ON ac.character_id = c.character_id
WHERE a.anime_id = ?
GROUP BY a.anime_id, ual.status;


  `;

  db.query(sql, [userId, animeId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Process the results to organize character names
    const animeData = {
      ...results[0],
      characters: results.map((row) => row.character_name).filter((name) => name !== null),
    };

    res.json(animeData);
  });
});

app.post('/api/login', cors(), (req, res) => {
    const { email,username, password } = req.body;
  
    const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      if (results.length > 0) {
        res.status(200).json({ user_id: results[0].user_id, message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
// Example route to add an anime to a user's list
app.post('/addAnimeToList', (req, res) => {
    const { u_id, a_id, a_status, a_score } = req.body;
  
    const sql = 'CALL add_anime_to_list(?, ?, ?, ?)';
    
    db.query(sql, [u_id, a_id, a_status, a_score], (err, results) => {
      if (err) {
        console.error('Error executing stored procedure:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ message: 'Anime added to the list successfully' });
    });
});


app.put('/api/:userId/anime/:animeId', (req, res) => {
  const { userId, animeId } = req.params;
  const { Your_Score } = req.body;

  // Update the score in the database using SQL
  const query = `UPDATE anime_list SET score = ? WHERE anime_id = ? AND user_id = ?`;

  db.query(query, [Your_Score, animeId, userId], (error, results) => {
    if (error) {
      console.error('Error updating score:', error);
      res.status(500).json({ error: 'Failed to update score' });
    } else {
      res.status(200).json({ message: 'Score updated successfully' });
    }
  });
});


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});
