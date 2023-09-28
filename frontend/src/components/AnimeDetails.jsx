import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'
function AnimeDetails() {
  const [animeData, setAnimeData] = useState(null);
  const { userId, animeId } = useParams();
  const [newScore, setNewScore] = useState("");


  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/${userId}/anime/${animeId}`)
      .then((response) => {
        setAnimeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [userId, animeId]);

  if (!animeData) {
    return <p>Loading...</p>;
  }
  const updateScore = () => {
    axios
      .put(`http://localhost:3002/api/${userId}/anime/${animeId}`, { Your_Score: newScore })
      .then((response) => {
        console.log("Score updated successfully");
        window.location.reload(); // Reload the page after the update
      })
      .catch((error) => {
        console.error('Error updating score:', error);
      });
  };
  
  
  const {
    title,
    synopsis,
    episode_count,
    score,
    type,
    aired_from,
    aired_till,
    imgurl,
    status,
    Your_Score,
    character_names,
    Your_Status
  } = animeData;

  return (
    <>
    <Navbar userId={userId}/>
    <div className="flex items-center bg-gray-900 p-8 shadow-lg">
      <img className="w-48 h-64 object-cover rounded" src={imgurl} alt={title} />
      <div className="ml-8">
        <h1 className="text-3xl font-black mb-4 text-white">{title}</h1>
        <p className="text-gray-300 text-lg mb-4">{synopsis}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-300 font-extrabold">Episode Count:</p>
            <p className="text-gray-300 ">{episode_count}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Score:</p>
            <p className="text-gray-300 ">{score}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Type:</p>
            <p className="text-gray-300 ">{type}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Aired From:</p>
            <p className="text-gray-300 ">{aired_from.slice(0,10)}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Aired Till:</p>
            <p className="text-gray-300 ">{(aired_till)? aired_till.slice(0,10):'Currently Airing'}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Status:</p>
            <p className="text-gray-300 ">{status}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Your Score:</p>
            <p className="text-gray-300 ">{Your_Score}</p>
          </div>
          <div>
            <p className="text-gray-300 font-extrabold">Your Status:</p>
            <p className="text-gray-300 ">{Your_Status}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-300 font-extrabold">Main Characters:</p>
            <p className="text-gray-300 ">{character_names}</p>
          </div>
          <div>
            <br/>
          <input className='border border-black bg-white text-black p-2 rounded-l-lg '
            type="text"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
          <button className='border border-black bg-white text-black font-semibold p-2 rounded-r-lg hover:bg-blue-900 hover:text-white ' onClick={updateScore}>Update Score</button>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AnimeDetails;