import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 68px;
  background-color: #2b2b2b; 
  padding: 10px;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  

  div.left-content{
    width: 30%;
    display: flex;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 42px;
      height: 42px;
      margin-right: 20px;

    }
    div.text-content{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      margin-top: 5px;

      h3{
        min-width: 170px;
        font-weight: 100;
        letter-spacing: 1px;
      }
      h4{
        min-width: 100px;
      }
    }
  }

  div.right-content{
    width: 40%;
    height: 60px;
    margin-right: 20px;
    display: flex;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

`;

export default Container;