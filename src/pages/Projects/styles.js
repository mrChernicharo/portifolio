import styled from 'styled-components';
import projectsBG from '../../assets/backgrounds/dark-polygon-bg.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image:linear-gradient(
      rgba(0, 0, 0, 0.70), 
      rgba(0, 0, 50, 0.60)
    ) ,url(${projectsBG});
  background-size: cover;
  filter: grayscale(0%);

  h1{
    position: relative;
    font-size: 46px;
    font-weight: 300;
    margin-bottom: 20px;

  }



`;

export default Container;


/** */