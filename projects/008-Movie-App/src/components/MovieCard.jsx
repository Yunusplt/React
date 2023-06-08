import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = "fa014e9985a8e84134704fbeb3385704";




const MovieCard = () => {
const [veri, setVeri] = useState([]);


const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`



useEffect(() => {
axios.get(url).then((res)=>setVeri(res.data.results))


}, [])
console.log(veri);

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-4  ">
      {veri.map((item) => (
        <div className="myDiv block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-80  relative overflow-hidden">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`}
              alt=""
            />
          </a>
          <div className="bg-indigo-700 h-12 text-white ">
            <footer>{item.title}</footer>
          </div>
          <div>
            <p className="absolute z-10 p-2 bg-white text-black opacity-80 w-80 bottom-0 -right-full ">
             <h1>Overview</h1>
              {item.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard