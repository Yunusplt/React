import "./Navbar.scss"
import logo from "../../helpers/logo.png";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" width="100px" />
        </div>
        <div className="links">
            <a href="#">Horoscope</a>
            <a href="#">Daily</a>
            <a href="#">Tarot</a>
            <a href="#">Article</a>
            <a href="#">Contact</a>
        </div>
    </div>
  )
}

export default Navbar