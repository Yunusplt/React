import React from 'react'
import Msg from './Msg';

const Person = (props) => {
//!destructing 2 farkli yol
//todo const Person = ({name, img}) => {
const {name,img} = props
    console.log(props);//! burdan bir object geldi. 
  return (
    <div>Person
    <h2>{props.name}</h2>
    <Msg myName={name}/>
    <img src={props.img} alt="" />
    </div>
  )
}

export default Person