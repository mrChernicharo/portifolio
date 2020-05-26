import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/icons/005-tree.svg';

import Container from './style'

function DropdownMenu(){

  function DropdownItem(props) {
    return (
      <div className="menu-item">
        {props.children}
      </div>
    );
  }

   return (
    <div className="dropdown">

        <div className="menu">
          <Link to="/">
            <DropdownItem>Home</DropdownItem> 
          </Link>
          <Link to="/projects">
            <DropdownItem>Projects</DropdownItem> 
          </Link>
          <Link to="/skills">
           <DropdownItem>Skills</DropdownItem> 
          </Link>
          <Link to="/about">
            <DropdownItem>About</DropdownItem> 
          </Link>

      </div>
    </div>
   );
  }

function NavBar(props) {

  return(
    <Container>
      <nav className="navbar">
        <div className="left-content">
          <img className="tree" src={logoImg} alt="tree-logo"/> 
          <div className="text-content">
            <h3>Felipe Chernicharo</h3>
            <h4>Dev Portifolio</h4>
          </div> 
        </div> 
        <ul className="navbar-nav">{props.children}
        <NavItem icon="menu" >
          <DropdownMenu />
        </NavItem>        
        </ul>
      </nav>
    </Container>

  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <button className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}

    </li>
  );
}

export default NavBar;