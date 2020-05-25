import styled from 'styled-components';

const Container = styled.div`


ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color:  #dadce1;
  text-decoration: none;
}

.navbar{

  height: 60px;
  background-color: #242526;
  padding: 0 1rem;
  border-bottom: 1px solid #474a4d;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-content{

  min-width: 220px;
  height: 100%;
  margin-left: -10px;
}
.tree{

  position: absolute;
  top: 1.3%;
  width: 40px;
  height: 40px;
}
.text-content{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  h3{
    font-size: 20px;
    font-weight: 300;
    align-self: flex-end;
  }
  h4{
    font-size: 12px;
    font-weight: 500;
    align-self: flex-end;


  }
}

.navbar-nav{
  /* border: 1px solid green; */
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.nav-item{
  width: calc(100px * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button {
  width: 200px;
  height: 34px;
  background:  #242526;
  border: 1px solid #dadce1;
  border-radius: 18px;
  padding: 5px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  font-size: 14px;

}

.icon-button:hover {
  filter: brightness(1.6);


}

.dropdown {
  position: absolute;
  top: 58px;
  width: 160px;
  background-color: #242526;
  border: 1px solid #dadce1;
  border-radius: 12px;
  padding: 1rem;
  overflow: hidden;
  z-index: 2;
  transform: translateX(-32%);
  transition: 0.5s ease-in-out;
  
}
.menu-item {
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  transition: background 0.5s;
  padding: 0.5rem;
  font-size: 12px;
  margin: 8px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-item:hover{
  background-color: #525357;
}

.menu{
  margin: 8px 0;

}

`;

export default Container;