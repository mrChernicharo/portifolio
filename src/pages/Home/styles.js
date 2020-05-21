import styled from 'styled-components';
import homeBG from '../../assets/backgrounds/rio-bg.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px;
  display: flex;

  div.text-box{
    min-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-end;
  }

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
    text-align:right;
    font-size: 30px;
    font-weight: 300;
  }


  background-image:linear-gradient(
      rgba(0, 0, 0, 0.70), 
      rgba(0, 0, 200, 0.60)
    ) , url(${homeBG});
  background-size: cover;
  filter: grayscale(80%);

`;

export default Container;


/** */