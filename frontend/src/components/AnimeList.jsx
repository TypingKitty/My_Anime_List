import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AnimeList = ({userId}) => {
  const [animeList, setAnimeList] = useState([]);
  const [title, setTitle] = useState('');
  let prvList = [];
  useEffect(() => {
    if (title !== '') {
      axios.get(`http://localhost:3002/api/animeByTitle/${title}`)
        .then(response => {
          setAnimeList(response.data);
          console.log(response.data);

        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  }, [title]);

  const handleBlur = () => {
    prvList = animeList;
    setAnimeList([]);
    setTitle('');
  };

  return (
    <div className="p-6">
      <div className="flex space-x-4">
        <div className="relative">
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            //onBlur={handleBlur}
            placeholder="Search by title"
            className="border px-2 py-1 rounded"
          />
          <div className="absolute z-10 w-full mt-2 bg-gray-100 border rounded py-1 border-gray-400">
            {animeList.map(anime => (
              <Link
              to={`/${userId}/anime/${anime.anime_id}`} className="px-2 py-1  cursor-pointer">
                <div className="px-2 py-1 hover:bg-gray-200 cursor-pointer" key={anime.title}>{anime.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
