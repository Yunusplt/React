import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import {data} from '../helpers/data';
import PlayerCard from './PlayerCard';
import { useState } from "react";

const CardContainer = ()=>{
    const [search, setSearch] = useState("");
    return (
      <>
        <Form.Control
          placeholder="Search a Player..."
          className="w-50 m-auto"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Container className="card-container my-4 p-3 rounded-4">
          <Row className="g-3 justify-content-center">
            {data.filter((player)=>player.name.toLowerCase().includes(search.trim().toLowerCase())).map((item,index) => (
              <Col key={index} md={6} lg={4} xl={3}>
                <PlayerCard {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
}

export default CardContainer