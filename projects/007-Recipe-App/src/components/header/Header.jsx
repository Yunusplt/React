import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyles'

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        FOOD APP
      </MainHeader>
      <FormContainer>
       <FoodInput placeholder='Search'>
       </FoodInput> 
       <Button>Search</Button>
       <Select>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Tea Time</option>
       </Select>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header