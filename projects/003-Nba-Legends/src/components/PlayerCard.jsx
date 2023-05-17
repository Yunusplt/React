
//todo #######################################################
// import React from 'react';

// const PlayerCard = (props) => {
//     console.log(props);
//   return (
//     <div>PlayerCard</div>
//   )
// }

// export default PlayerCard;

//todo #######################################################
import { useState } from "react";
import Card from "react-bootstrap/Card";
const PlayerCard = ({ img, name, statistics }) => {
  //    const {img,name,statistics} = props
  //   console.log(props);
const [showImage, setShowImage] = useState(true)
  return (
    <Card className="rounded-2 m-auto player-card" role="button" onClick={()=>setShowImage(!showImage)}>
{showImage ? ( <Card.Img variant="top" src={img} className="player-logo" />) :
      (<ul className="m-auto">
        {statistics.map((item,i)=>{
            return <li className="h5 text-start list-unstyled" key={i}>🏀{item}</li>
        })}
      </ul>)}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};
export default PlayerCard;


