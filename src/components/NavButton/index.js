import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

function NavButton(props) {
  return(
    <Link 
      style={{textDecoration : 'none'}} 
      to={(props.title.toLowerCase() === 'home') ?
      '/': `/${props.title.toLowerCase()}`
    }>
      <Container>

        <span>{props.title}</span>
      </Container>
    </Link>
  )
}
export default NavButton;