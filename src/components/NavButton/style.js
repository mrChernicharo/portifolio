import styled from 'styled-components';

const Container = styled.button`

  min-width: 90px;
  height: 30px;
  border-radius: 16px;
  margin: 4px;
  background: #2b2b2b;
  
  :hover{
    background: #c4c4c4;
    span{
      color: #2b2b2b;
      font-weight: bold;
    }
    transition: ease-in-out 0.3s;
  }
  :active {
    background: #000;
  }



`;

export default Container