import React from 'react';
import Container from './styles';
import image from '../../assets/icons/javascript.svg';


function SkillTable(props) {
  return ( 
  <Container>
    <span>{props.title}</span>
      <table>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
      </table>
  </Container>
  )
};

export default SkillTable;