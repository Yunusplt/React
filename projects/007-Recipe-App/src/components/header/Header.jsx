import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyles'

const Header = ({setQuery, setMealType, getData}) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    getData()
  }
  return (
    <HeaderContainer>
      <MainHeader>
        FOOD APP
      </MainHeader>
      <FormContainer onSubmit={handleSubmit}>
       <FoodInput placeholder='Search' onChange={(e)=>setQuery(e.target.value)}>
       </FoodInput> 
       <Button>Search</Button>
       <Select onChange={(e)=>setMealType(e.target.value)}>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>TeaTime</option>
       </Select>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header