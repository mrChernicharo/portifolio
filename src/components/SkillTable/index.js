import React from 'react';
import Container from './styles';
import { skills1, skills2, skills3 } from '../../pages/Skills/skills';


function SkillTable(props) {
  let skills = [];
  switch (props.title) {
    case "Main Weapons":
      skills = skills1;
      break;
    case "Combat Gear":
      skills = skills2;
      break;
    case "Tool Belt":
      skills = skills3;
      break;
    default:
      break;  
    
  }
  return ( 
  <Container>
    <span>{props.title}</span>
      <table>
        <tbody> 
          <tr> 
            {skills.map(skill => {
              console.log(skill.img)
              return (
                <td key={skills.indexOf(skill)} title={skill.name}><img src={skill.img} alt={skill.name}/></td>
              );
            })}
          </tr> 
        </tbody>   
      </table>
  </Container>
  )
};

export default SkillTable;