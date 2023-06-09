import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [acik, setAcik] = useState(false)
  return (
    <Nav>
      <Logo to="/home" onClick={() => setAcik(false)}>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger>
        <GiHamburgerMenu onClick={() => setAcik(!acik)} />
      </Hamburger>
      <Menu osman={acik} onClick={() => setAcik(false)}>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/" target="blank">
          Github
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar