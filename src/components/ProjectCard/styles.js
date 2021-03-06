import styled from "styled-components";
import { shade } from "polished";

const Container = styled.div`
  width: 560px;
  height: 240px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #515151;
  padding-left: 42px;
  border-radius: 32px;
  background: transparent;

  img.gif {
    max-width: 200px;
    max-height: 240px;
    margin-left: 10px;
    border-radius: 6px;
    transition: ease-in-out 0.6s;

    :hover {
      /* margin: -20px; */
      /* /* max-width: 230px; */
      max-height: 300px;
      max-width: 260px;
      margin-left: -30px;
      border: 6px solid #26a532;
      border-radius: 14px;
      z-index: 2;
    }
  }

  div.text-area {
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

    h3 {
      color: #fff;
      font-size: 32px;
      font-weight: 300;
    }

    p {
      width: 230px;
      font-size: 12px;
      font-weight: 400;
      text-align: end;
      color: #fff;
    }

    /* div.text-box {
      border: 1px solid green;

      min-width: 340px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      align-content: flex-end;
    } */

    a {
      text-decoration: none;
    }

    button {
      padding: 9px;
      margin-top: 4px;
      margin-bottom: -4px;
      border-radius: 18px;
      border: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: #26a532;
      transition: ease-in 0.2s;
      cursor: pointer;

      :hover {
        background-color: ${shade(0.3, "#26a532")};
      }

      img {
        width: 20px;
        margin: 0 10px 0 0;
      }
      span {
        font-weight: 500;
        margin-right: 6px;
      }
    }
  }

  @media (max-width: 670px) {
    padding: 0;
    margin: 0;
    /* width: 290px;
    height: 470px; */
    height: 100%;
    width: 300px;
    margin: 12px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid green; */

    /* display: block; */

    :first-child {
      /* margin-top: 780px; */
    }

    img.gif {
      /* position: absolute; */
      margin-top: 24px;
      /* margin-left: -30px; */
      /* top: 340px; */
      align-self: center;
      align-items: center;
      /* margin: 10px 0 0 10px; */
      /* border: 1px solid green; */

      :hover {
        /* width: 280px; */
        z-index: 2;
        margin: 0;
      }
    }
    div.text-area {
      margin: 0;
      padding: 0;
      height: 240px;
      width: 260px;
      align-self: center;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 10px;

      p {
        align-content: center;
        text-align: center;
      }
    }
  }
`;

export default Container;
