import styled, {css} from 'styled-components';
import { lighten } from 'polished';

const Container = styled.button`


  min-width: 90px;
  height: 30px;
  border-radius: 16px;
  margin: 4px;
  background: #2b2b2b;
  text-decoration : none;
  cursor: pointer;
  
  :hover{
    background: ${lighten(0.3 ,'#c4c4c4')};
    span{
      color: #2b2b2b;
      font-weight: bold;
    }
    transition: ease-in-out 0.3s;
  }
      
  ${(props) => props.active && css`
    span{
      color: #2b2b2b;
      font-weight: bold;
     }
    background-color: #c4c4c4;
    }`}


  @media screen and (max-width: 760px){
    display: none;
  }
  



`;

export default Container