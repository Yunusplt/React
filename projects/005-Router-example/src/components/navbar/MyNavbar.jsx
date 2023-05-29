import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'



const MyNavbar = () => {
  //!burada Link yada Navlink ile yol alıp gidilen Home ve About sayfası olacak, ek olarak tıklandığında  github adresinize gidilen bir link te yazınız
return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <img alt="clarusway_logo" src={logo} />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Home
            </NavLink>

            <NavLink
              className="nav-link"
              to="/about"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              About
            </NavLink>

            <a
              href="https://github.com/clarusway/clarusway-FS-DE-05-TR"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
             Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default MyNavbar