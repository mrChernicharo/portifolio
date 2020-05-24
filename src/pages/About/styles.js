import styled from 'styled-components';
import aboutBG from '../../assets/backgrounds/dark-polygon-bg2.png';

const Container = styled.div`
  width: 100%;
  height:200vh;

  display: flex;
  /* border: 1px solid red; */

  div.content{
    margin: 0 auto;
    min-width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* border: 1px solid green; */
    background: rgba(0, 0, 0, 0.70);
    h1 {
      font-size: 48px;
      font-weight: 300;
      align-self: flex-start;
      margin-left:30px;
      margin-top: 20px;
    }
    p, li{
      font-weight: 400;
    }

    .progress-bar{
      width: 200px;
    }

  }

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.70), 
      rgba(0, 0, 200, 0.60)
    ) ,url(${aboutBG});
  background-size: cover;
  filter: grayscale(10%);


}
`;

export default Container;


/** */