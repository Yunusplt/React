import Card from "react-bootstrap/Card";
import { useState } from "react";
import React from "react";

const PlayerCard = (props) => {
  const { img, name, statistics } = props;
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => setShowImage(!showImage);
  return (
    <Card className="player-card m-auto rounded-2" role="button" onClick={handleClick}>
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li className="h5 text-start list-unstyled" key={i}>
                🏀 {item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
