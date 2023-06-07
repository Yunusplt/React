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
    <div>
    {veri.map((item)=>(
        <div>
            {item.original_title
            }
        </div>
    ))}
    </div>
  )
}

export default MovieCard