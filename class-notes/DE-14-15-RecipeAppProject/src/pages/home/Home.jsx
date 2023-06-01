
import Header from "../../components/header/Header"
import RecipeCard from "./RecipeCard"
import { HomeImg, ImgDiv } from './HomeStyles'
import homeSvg from "../../assets/home.svg"
import { useState } from "react";
import axios from 'axios'

const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  const[yemekler, setYemekler] = useState([])
  const[query, setQuery] = useState("")
  const[ogun, setOgun] = useState("Breakfast")


  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ogun}`;

  const getData = async()=>{
    const veri = await axios.get(url)
    setYemekler(veri.data.hits)
  }

 
 return (
    <div>
   
      <Header  />

      {[].length>0 ? (
        <div>
            <RecipeCard />
          
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
}

export default Home