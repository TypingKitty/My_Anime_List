import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import FavAnime from './Fav';
import React from 'react';
import TopAnime from './TopAnime';

function MainPage() {
  const { userId } = useParams();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar userId={userId} className="bg-blue-900" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My List</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-8">
          <TopAnime userId={userId} />
        </div>
        <h1 className="text-3xl font-bold mb-6">Top Animes</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-8">
          <FavAnime userId={userId} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
