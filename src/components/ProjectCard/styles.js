import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  width: 560px;
  height: 240px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  padding-left: 28px;
  border-radius: 32px;
  background: #c4c4c4;


  img.gif {
    width: 200px;
    margin-left: 10px;
    border-radius: 6px;
    transition: ease-in-out 0.6s;

    :hover{
      margin: -20px;
      width: 280px;
      margin-left: -40px;
      border: 3px solid #26a532;

    }

  }

  div.text-area{
    height: 90%;
    width: 260px;
    margin-right: 30px;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    
    h1 {
      font-size: 52px;
      font-weight: 300;
   }
    
    h3{
      color: #515151;
      font-size: 32px;
      font-weight: 300;
    }

    p {
      width: 200px;
      font-size: 12px;
      font-weight: 400;
      text-align: end;
      color: #515151;
    }

    div.text-box{
    min-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-end;
  }

  a{
    text-decoration: none;
  }

    button{
      padding: 9px;
      margin-bottom: -4px;
      border-radius: 18px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: #26a532;
      transition: ease-in 0.2s;
      cursor: pointer;

      :hover{
        background-color: ${shade(0.3, '#26a532')}
      }
            
      img{
        width: 20px;
        margin: 0 10px 0 0;
      }
      span{
        font-weight: 500;
        margin-right: 6px;
      }

    }


  }

  @media (max-width: 670px) {
    width: 290px;
    height: 470px;
    /* margin: 0px auto; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* display: block; */

    :first-child{
      /* margin-top: 780px; */
    }

    img.gif {
      /* position: absolute; */
      margin-top: 20px;
      margin-left: -30px;
      top: 340px;
      /* margin: 10px 0 0 10px; */

      :hover{
      width: 280px;
      margin: 0px 20px 10px 0;
     }
    }
    div.text-area {
      height: 240px;
      width: 260px;
      align-self: center;
      align-items: center;
      justify-content: space-around;


      p{
        align-content: center;
        text-align: center;
      }


    }

  }


 
  
`;

export default Container;