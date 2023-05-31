import React from 'react'
import { Button, Cards, MainContainer, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipes }) => {
  console.log(recipes);
  let navigate = useNavigate();
  return (
    <MainContainer>
      {recipes.map((item,index) => (
        <Cards key={index}>
          <RecipeHeader>{item.recipe.label}</RecipeHeader>
          <RecipeImage src={item.recipe.image} />
          <Button
            onClick={() => {
              navigate("/details", { state: { item } });
            }}
          >
            Details
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard