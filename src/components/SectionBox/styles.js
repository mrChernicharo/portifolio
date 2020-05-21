import styled from 'styled-components';

const Container = styled.div`
  width: 430px;
  height: auto;
  padding: 0 16px 0 30px;
  /* border: 1px solid white; */
  
  h3 {
    margin:18px 0 10px 0;
    }


  ul{
    list-style: square;
    margin-left: 16px;
  }

  p, li{
    font-family: 'Roboto' sans-serif;
    line-height: 16px;
    color: #ccc;
    font-size: 11px;
    font-weight: 300;
  }

  table{


    tr td{
    /* border: 1px solid red; */
    font-size: 12px;
    } 


  }

  img {
    width: 30px;
  }
  svg{
    border-radius: 5px;
    height: 10px;
    width: 90px;
  }
  /* li{
    color: #ccc;
    font-size: 12px;
    font-weight: 300;
  } */

`;

export default Container;