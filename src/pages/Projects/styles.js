import styled from 'styled-components';
import projectsBG from '../../assets/backgrounds/dark-polygon-bg.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 120px;
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

  @media screen and(max-width: 670px) {
    /* margin-top: 1820px; */
    
  }

`;

export default Container;


/** */