import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  const [acik, setAcik] = useState(false);
  return (
    <Nav>
      <Logo to="/home" onClick={() => setAcik(false)}>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu>
        <MenuLink to="/about" onClick={() => setAcik(!acik)}>
          About
        </MenuLink>
        <a href="https://github.com">Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar