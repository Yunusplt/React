import React from 'react'
import HeaderS, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonS, { DomatesButon } from './style/ButonStyle'

const Home = () => {
  return (
    <DivStyle>
        <HeaderS>STYLED COMPONENT</HeaderS>
        <LinkS href="#">LINK</LinkS>
        <ButtonS ozlem>Go Home</ButtonS>
        <ButtonS>Go Back</ButtonS>
        <DomatesButon yunus>Go Home</DomatesButon>
        <DomatesButon>Go Back</DomatesButon>
    </DivStyle>
  )
}

export default Home