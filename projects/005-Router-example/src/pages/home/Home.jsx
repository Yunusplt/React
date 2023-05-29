import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardCountry from './CardCountry';

const Home = () => {
  const [ülkeler, setUlkeler] = useState([]);

  const url = ("https://restcountries.com/v3.1/all");

  const getCountyDataFromApi = async () => {
    try{
    const response = await fetch(url);
    const data = await response.json();
    setUlkeler(data);
    }catch(error){
      console.log(error);
    }
  }
  if (ülkeler.length === 0 ) {
    getCountyDataFromApi();
  }

 useEffect(() => {
   getCountyDataFromApi();
 }, [ülkeler]);

  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
    <Container className="rounded-4 my-4 p-3 card-container">
      <Row className="g-3 justify-content-center">
        {ülkeler.map((item, index) => {
          return (
            <Col key={index} sm={6} md={4} lg={3} xl={2}>
              <CardCountry  item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home