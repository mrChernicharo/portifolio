import styled from 'styled-components';
import { lighten } from 'polished';

const Container = styled.div`
  width: 300px;
  height: auto;
  padding-left: 20px;
  /* border: 1px solid white; */

  tr {  
    width: 250px;
    margin: 10px 0 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 40px);
    column-gap: 10px;
    row-gap: 10px;
    /* border: 1px solid white; */


    td {
    /* width: 40px;*/
    height: 40px; 
    background: #666;
    border-radius: 4px;
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
          background: ${lighten('0.2', '#666')}
        } 

    } 

    img {
      width:28px;
      height: 28px;      
    } 
  }
  
`;

export default Container;