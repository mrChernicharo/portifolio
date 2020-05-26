import styled from 'styled-components';

import homeBG from '../../assets/backgrounds/rio-bg.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 140px 0 60px 60px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.20), 
      rgba(0, 0, 0, 0.30)) ,url(${homeBG});
  background-size: cover;
  
  div.text-box{
    min-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-end;

    h1 {
      font-size: 52px;
      font-weight: 300;
    }
    h3 {
      font-size: 32px;
      font-weight: 300;
    }
    p {
      max-width: 180px;
      text-align: right;
      font-size: 30px;
      font-weight: 300;
    }
  }


  .follow-me{
    border-right: 1px solid #474a4d;
    border-bottom: 1px solid #474a4d;
    border-bottom-right-radius: 6px;
    padding: 6px 0 3px 0;
    position: absolute;
    top: 60px;
    left: 0;
    width: 44px;
    height: 210px;

    background: #242526;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .info{
      /* border: 1px solid green; */
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:center;
      cursor: pointer;
    }
    
    h4{
      position: absolute;
      top: 0;
      margin-left: -2px;
    }
    p{
      font-size: 12px;
      margin-left: 5px;
    }
    a{
      
    }
    img{
      width:26px;
      height: 26px;

    }
  }




@media screen and (max-width: 500px) {
  padding: 140px 0 60px 0;
  div.text-box {
    margin: 0 auto;
    
    align-items: center;
    align-content: center;

    p{
      text-align: center;
    }
  }

}

`;

export default Container;
