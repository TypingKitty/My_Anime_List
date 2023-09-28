import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeCard from './AnimeCard';

function TopAnime({ userId }) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/${userId}/mylist`);
        setAnimeList(response.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
      }
    };

    fetchAnimeList();
  }, [userId]);

  return (
    <div className="h-64 overflow-x-auto whitespace-nowrap overflow-y-hidden">
      <div className="flex">
        {animeList.map((anime) => (
          <div key={anime.id} className="flex-shrink-0 p-2">
            <AnimeCard userId={userId} anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAnime;
