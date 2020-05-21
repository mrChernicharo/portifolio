import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 160px;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 22px;



  table{
    width: 300px;
    /* border-collapse: separate; */
    margin-left: -18px;



    tbody{
      border: 1px solid white;

      span {
        font-weight: 400;
        /* border: 1px solid white; */

      }

      tr{
        /* margin: 10px; */
        display: flex;
        align-items: baseline;
        justify-content: center;

        /* border: 1px solid white; */
        

        td {
          margin: 8px;
          width: 40px;
          height: 40px;
          background: rgba( 255, 255, 255, 0.5);
          border-radius: 4px;
          /* border: 1px solid white; */
          display: flex;
          align-items: center;
          justify-content: center;
          
          img {
            width:28px;
            height: 28px;
          }
        }
      }
    }
  }
`;

export default Container;