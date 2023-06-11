import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Main = () => {
  const {movie} = useContext(MovieContext)
  console.log(movie);


  return <div>
    {movie.map((item)=>(item.title))}
  </div>;
};

export default Main;
