import React from 'react';
import { Link } from 'react-router-dom';

function AnimeCard({ anime, userId }) {
  const { imgurl, title, score, id, yourScore } = anime;
  return (
    <Link
      to={`/${userId}/anime/${id}`}
      className="w-48 h-80 rounded overflow-hidden shadow-lg m-4 flex flex-col "
    >
      <div className="h-2/3 relative hover:shadow bg-cyan-500">
        <img className="w-full h-full object-cover" src={imgurl} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-300 text-base">Score: {score}</p>
          <p className="text-gray-300 text-base">Your Score: {yourScore}</p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;