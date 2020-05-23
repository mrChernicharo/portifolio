import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

function NavButton(props) {
  const active = props.children
  // console.log(active)

  return(
    <Link 
      to={(props.title.toLowerCase() === 'home') ?
      '/': `/${props.title.toLowerCase()}`
    }>
      <Container active={active}>
        <span>{props.title}</span>
      </Container>
    </Link>
  )
}
export default NavButton;