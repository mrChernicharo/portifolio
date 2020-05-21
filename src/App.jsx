import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
// import Home from './pages/Home'
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
