import {Carousel} from 'react-bootstrap'
import isa from "../img/isa.jpeg"
import devops from "../img/devops.jpeg"
import about from "../img/about.jpeg"

//todo resimleri import ettik. asagiya inip src kismina isimleri ile cagiriyoruz.



const Slider = () => {
  // !!!!!!!!!!!
  //! fade=soluklaşarak diğer resme geç, autoPlay={true} otomatik resim değiş, interval={5000} 5 saniyede bir değiş
  return (
    <Carousel fade autoPlay={true} interval={5000}>
      <Carousel.Item>
        <img className="d-block w-100" alt="First slide" src={isa}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Second slide" src={devops}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Third slide" src={about} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider