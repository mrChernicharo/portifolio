import React from 'react';
import Container from './styles';


function SectionBox(props) {
  
  return ( 
  <Container>
    <h3>{props.title}</h3>
    {props.children}

  </Container>
  )
};

export default SectionBox;