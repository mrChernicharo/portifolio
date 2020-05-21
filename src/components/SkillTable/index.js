import React from 'react';
import Container from './styles';
import image from '../../assets/icons/javascript.svg';


function SkillTable(props) {
  return ( 
  <Container>
    <span>{props.title}</span>
      <table>
        <tbody>
          <tr>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
          </tr>
          <tr>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
            <td title="js"><img src={image} alt="js"/></td>
          </tr>

        </tbody>
      </table>
  </Container>
  )
};

export default SkillTable;