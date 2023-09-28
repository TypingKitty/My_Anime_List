import React from 'react';
import AnimeList from './AnimeList';
import { Link, useParams } from 'react-router-dom';

function Navbar({userId}) {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-blue-500 py-2  shadow-lg focus:text-blue-700 dark:bg-blue-900 lg:py-4 text-black">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <Link to={`/main/${userId}`}
            className="font-serif text-3xl text-white font-bold"
          >
            MyAnimeList
          </Link>
        </div>
        <div className='flex items-center'>
          <div>
          <AnimeList userId = {userId}/>
        </div>
        <div>
          <Link to={`/`}
            className="font-serif text-1xl text-white "
          >
            Log Out
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;