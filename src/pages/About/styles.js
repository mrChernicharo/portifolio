import styled from "styled-components";
import aboutBG from "../../assets/backgrounds/dark-polygon-bg2.png";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(50, 0, 190, 0.6)),
    url(${aboutBG});
  background-size: cover;
  filter: grayscale(10%);

  div.content {
    margin: 0 auto;
    min-width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: rgba(0, 0, 0, 0.7);
    h1 {
      font-size: 48px;
      font-weight: 300;
      align-self: flex-start;
      margin-left: 30px;
      margin-top: 20px;
    }
    p,
    li {
      font-weight: 400;
    }
    p.red-line {
      color: #f54b42;
    }

    .progress-bar {
      width: 200px;
    }

    a {
      line-height: 20px;
      text-decoration: none;
      color: orange;
    }
  }
`;

export default Container;

/** */
