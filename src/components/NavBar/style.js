import styled from 'styled-components';

const Container = styled.div`
/* display: absolute; */
/* :root{
  --bg: #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;
} */

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
}

.navbar-nav{
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
  height: 24px;
  border: 1px solid #dadce1;
  border-radius: 12px;
  padding: 5px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
}

.icon-button:hover {
  filter: brightness(1.4);
}

`;

export default Container;