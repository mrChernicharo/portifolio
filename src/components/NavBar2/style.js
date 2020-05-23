import styled from 'styled-components';
import { shade, lighten } from 'polished';



const Container = styled.div`
  
  margin-top: 0px;
  z-index: 2;
  position: absolute;

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

    div.text-content{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      margin-top: 5px;
      margin-left: 50px;

      h3{
        min-width: 170px;
        font-weight: 100;
        letter-spacing: 1px;
      }
      h4{
        min-width: 100px;
      }
    }
      img.tree {
        position: absolute;
        width: 40px ;
        height: 40px ;
        margin: 0 20px 0 0 ;
      }
  }

  div.menu-section{
    display: none;
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

  
  /* olha o media query */

  @media screen and (max-width: 760px) { 



    div.menu-section{

      width: 100vw;
      height: 100vh;
      
      position: fixed;
      top: 0;
      right: 0;
      left: 0;

      /*  */ /* <== */

      background: #2b2b2b;
      display: flex;
      /* display: none; */
      flex-direction: column;
      align-items: center;
      justify-content: space-around;


      .one, .two, .three{
      display: absolute;
      width: 100%;
      height: 4px;
      margin: 5px auto;
      background: #fff;
      border-radius: 2px;
    }
    


   

    .menu-toggle{
      /* display: none; */

      position: absolute;
      top: 22px;
      right: 30px;
      width: 30px;
      height: 40px;

    }


    .links{
      display: flex;
      flex-direction: column;
      align-items: center;
      
    
      a{
        margin: 20px;
        padding: 7px 20px;
        text-decoration: none;

        border-radius: 16px;
        cursor: pointer;

        &:hover {
          background: ${lighten(0.3,'#2b2b2b')}
        }
        /* display: none; */


      }
    }
  } 
}
`;

export default Container;