import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("breakfast")
  const [recipes, setRecipes] = useState([]);

  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async ()=>{
    const veri = await axios.get(url)
    setRecipes(veri.data.hits)
  }
// useEffect(()=>{
//   getData()
//   },[])

  return (
    <div>
      <Header setQuery = {setQuery} setMealType = {setMealType} getData = {getData} />

      {recipes.length > 0 ? (
        <div>
          <RecipeCard recipes = {recipes} />
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
