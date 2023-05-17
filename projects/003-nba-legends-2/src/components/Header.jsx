import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import nbaLogo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={nbaLogo} width="200px"></Image>
      <h1 className="text-light font-monospace my-2 display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
};

export default Header;
