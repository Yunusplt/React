import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


//todo React alaninda döngü icin sadece map kullaniliri. conditionlardan da sadece ternary desteklenir.

// const CourseCard = (props) => {
const CourseCard = ({data}) => {
    // console.log(props);
    // console.log(props.data[0].name);
    console.log(data);
    console.log(data[0].name);
  return (
    // <Container>
    //     <Row>
    //         {data.map((veri)=>{
    //             return (
    //               <Col>
    //                 <Card>
    //                   <Card.Img variant="top" src={veri.img} />
    //                   <Card.Body>
    //                     <Card.Title>{veri.name}</Card.Title>
    //                     <Card.Text>
    //                       {veri.text}
    //                     </Card.Text>
    //                     <Button variant='info'>More Info...</Button>
    //                   </Card.Body>
    //                 </Card>
    //               </Col>
    //             );
    //         })}
    //     </Row>
    // </Container>
    <Container>
      <Row className='g-3 text-center'>
        {data.map(({ img, name, text, id }) => {
          //! arraw map süslü kullangiginda return ister.
          //! reacte süslü koymayabilirsiniz, o zaman returne de ihtiyac olmaz.
          //todo DataBase'den cekilen veriler ekrana bastirilirken, en dis div unique bir veri ister bunu da key={id} seklinde yazariz id olmak zorunda degil. unique herhangi bir property olabilir. z.B. img.
          return (
            <Col key={id} sm={12} md={6} lg={4} className='d-flex justify-content-center'>
              <Card style={{width:"18rem"}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="info">More Info...</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CourseCard