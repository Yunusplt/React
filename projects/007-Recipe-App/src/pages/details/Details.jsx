import React from 'react'
import { useLocation } from 'react-router-dom';
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles';
import resim from '../../assets/default-image.jpg'

const Details = () => {
  const location = useLocation();
  const item = location.state.item
  console.log(item);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{item.recipe.label}</h1>
        <img src={resim} alt="" height={"150px"} />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <p>Nutrients</p>
          <p>
            {item.recipe.totalNutrients.CA.label} :{" "}
            {Math.round(item.recipe.totalNutrients.CA.quantity)}
            {item.recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
            {item.recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
            {item.recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity)}
            {item.recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{item.recipe.totalWeight}</p>
          <p>Calories: {Math.round(item.recipe.calories)}</p>
          <p>
            {item.recipe.totalNutrients.FAT.label} :{" "}
            {Math.round(item.recipe.totalNutrients.FAT.quantity)}
          </p>
          <p>
            {item.recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
          </p>
          <p>
            {item.recipe.totalNutrients.PROCNT.label} :{" "}
            {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}
          </p>
          <p>
            {item.recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
          </p>
        </OtherPart>
        <ImgContainer>
          <img src={item.recipe.image} alt="" />
        </ImgContainer>
        <IngredContainer>
          <p>
            {item.recipe.ingredients.map((i, index) => {
              return (
                <div>
                  <p>
                    {index + 1} * {i.text}
                  </p>
                </div>
              );
            })}
          </p>
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
}

export default Details