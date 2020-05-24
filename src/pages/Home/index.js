import React /*, {useEffect}*/ from 'react';
import NavBar from '../../components/NavBar';
import Container from './styles'

function Home() {

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     const myWidth  = window.innerWidth;
  //     const myHeight = window.innerHeight;
  //     console.log(`width: ${myWidth} | height: ${myHeight}`);
  //  })
  // },[])

  return (
    <>
      {/* <NavBar active="home"/> */}
      <NavBar/>
      <Container>
        <div className="text-box">
          <h1>Hello World</h1>
          <h3>I am Felipe</h3>
          <br />
          <br />
          <p>Welcome to my developer portifolio!</p>
        </div>
      </Container>

    </>
  )
}
export default Home;