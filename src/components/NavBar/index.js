import React, { useState } from 'react';
import Container from './style'

function NavBar(props) {

  return(
    <Container>

      <nav className="navbar">
        <ul className="navbar-nav">{props.children}
        <NavItem icon="home" >
          <p>hello</p>
        </NavItem>        
        <NavItem icon="projects" >
          <p>hello</p>
        </NavItem>
        <NavItem icon="skills" >
          <p>hello</p>
        </NavItem>
        <NavItem icon="about" >
          <p>hello</p>
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
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}

    </li>
  );
}

export default NavBar;