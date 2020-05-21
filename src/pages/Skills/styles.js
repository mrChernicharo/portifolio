import styled from 'styled-components';
import starBG from '../../assets/backgrounds/dark-fallen-stars-resize-bg.jpg';

const Container = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  align-items: baseline;
  justify-content: center;

  div.content{
    min-width: 480px;
    height: 700px;
    border: 1px solid red; /** border */
    display: flex;
    flex-direction: column;
    align-items:flex-start;
  }

  h1 {
    font-size: 46px;
    font-weight: 300;
    margin: 20px 0 10px 20px;
  }



  background-image: url(${starBG});
  background-size: cover;
`;

export default Container;


/** */