import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  width: 600px;
  height: 240px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  padding-left: 28px;
  border-radius: 32px;
  background: #c4c4c4;

  img.gif {
    width: 240px;
    margin-left: 10px;
    border-radius: 6px;
    transition: ease-in-out 0.6s;

    :hover{
      width: 310px;
      margin-left: -40px;
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

    
    h3{
     color: #515151;
     font-weight: 300;
    }
    p{
      font-size: 12px;
      font-weight: 400;
      color: #515151;

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
    width: 316px;
    height: 470px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: block;

    img.gif {
      position: absolute;
      align-self: center;
      top: 340px;
      margin: -50px 0 0 10px;
      :hover{
      width: 310px;
      margin-left: -26px;
    }
    }
    div.text-area {
      height: 40%;
      width: 260px;
      margin-top: 10px;
      justify-content: space-around;
      align-items: center;
      align-self: center;

      p{
        align-content: center;
        text-align: center;
      }

    }

  }


 
  
`;

export default Container;