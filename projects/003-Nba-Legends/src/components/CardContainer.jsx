import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import Col from "react-bootstrap/esm/Col";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        className="w-50 m-auto"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="g-3 justify-content-center">
          {data.filter(player=>player.name.toLowerCase().includes(search.trim().toLowerCase())).map((player, index) => {
            return (
              <Col key={index} md={6} lg={4} xl={3}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
