import React from 'react'
import MovieCard from '../components/MovieCard';

const Main = () => {
  return (
    <>
      <div className="bg-gray-400 flex justify-center p-4">
        <form action="">
          <input
            type="search"
            className="rounded-md"
            placeholder="Search a movie..."
          />
          <button
            type="submit"
            className="border-2 border-black px-3 bg-gray-200"
          >
            Search
          </button>
        </form>
      </div>
      <MovieCard />
    </>
  );
}

export default Main