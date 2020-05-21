import styled from 'styled-components';

const Container = styled.div`
  width: 260px;
  height: auto;
  padding-left: 20px;
  /* border: 1px solid white; */

  table {  
    margin: 10px 0 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 40px);
    column-gap: 10px;
    row-gap: 10px;
    /* border: 1px solid white; */

      td {
      /* width: 40px;*/
      height: 40px; 
      background: rgba( 255, 255, 255, 0.5);
      border-radius: 4px;
      /* border: 1px solid white; */
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        width:28px;
        height: 28px;
      }  
    }   
  }
`;

export default Container;