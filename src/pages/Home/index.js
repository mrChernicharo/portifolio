import React from 'react';
import NavBar from '../../components/NavBar';
import Container from './styles'

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="text-box">
          <h1>Hello World!</h1>
          <h3>I am Felipe</h3>
          <br />
          <br />
          <p>Welcome to my developer portifolio</p>
        </div>
      </Container>

    </>
  )
}
export default Home;