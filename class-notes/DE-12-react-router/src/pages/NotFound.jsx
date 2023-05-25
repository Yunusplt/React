import React from 'react'
import { Container } from 'react-bootstrap'
import resim from '../img/notFound.jpeg'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const myNavigate = useNavigate();
  return (
  <Container>
   <img src={resim} alt="" width="400px"/>
   <button className="btn btn-danger"
  //  onClick={() => window.location.href = "/"} //todo netlify da calismaz.
   onClick={()=>myNavigate("/")}
   >GO HOME </button>
  </Container>
  )
}

export default NotFound