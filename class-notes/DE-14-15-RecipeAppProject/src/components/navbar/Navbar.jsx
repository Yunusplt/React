import React from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {

  const[acik,setAcik]=useState(false)

  return (
    <Nav>
      <Logo to="/home" onClick={() => setAcik(false)}>
        <i>{"<Clarusway/>"} </i>
        {/* tag lere özel < işaretlerini string gibi kullanmak istersek üstteki syntax la yazarız */}
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu osman={acik} onClick={() => setAcik(false)}>
        <MenuLink to="/about">About</MenuLink>

        <a href="https://github.com">Github</a>

        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar