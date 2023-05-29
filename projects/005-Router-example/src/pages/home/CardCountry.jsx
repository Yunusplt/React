import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Carditem = ({item}) => {
    const navigate = useNavigate()
    //  console.log(item);
  return (
   
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      style={{ height: "200px" }}
      onClick={()=>navigate(`/details/${item.name.common}`)}
    >
      <Card.Img
        variant="top"
        src={item.flags.png}
        className="player-logo"
        style={{ height: "160px" }}
      />
      <Card.Footer className="">
        <Card.Title
          className="text-center  m-auto overflow-hidden"
          style={{ height: "45px" }}
        >
          {item.name.common}
        </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default Carditem;
