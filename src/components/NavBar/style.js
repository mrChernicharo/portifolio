import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  margin-top: 0px;
  z-index: 2;
  position: absolute;
  /* position: fixed; */
  /* top: -200px; */
  /* bottom:  */
  width: 100%;
  height: 68px;
  background-color: #2b2b2b; 
  padding: 10px;
  display: flex;
  justify-content: space-between;


  div.left-content{
    width: 30%;
    display: flex;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 42px;
      height: 42px;
      margin-right: 20px;

    }
    div.text-content{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      margin-top: 5px;

      h3{
        min-width: 170px;
        font-weight: 100;
        letter-spacing: 1px;
      }
      h4{
        min-width: 100px;
      }
    }
  }

  div.menu{
    visibility: hidden;
    img{
      width: 36px;
      height: 36px;
      padding: 3px;
      border: 1px solid #fff;
      border-radius: 4px;
      margin: 8px 5px 0 0;
      transition: ease-in 0.2s;

      :hover {
        background-color: ${shade(0.3, '#527452')} 
      }
    }
    
  }

  div.right-content{
    visibility: visible;
    width: 460px;
    height: 60px;
    margin-right: 20px;
    margin-left: 20px;
    position: absolute;
    right: -10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid #fff; */

  }




  @media screen and (max-width: 780px) {
    div.right-content{
      visibility: hidden;
    }

    div.menu {
      visibility: visible;

      
    }
  }

`;

export default Container;