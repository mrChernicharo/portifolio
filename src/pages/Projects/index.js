import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ProjectCard from '../../components/ProjectCard';
import Container from './styles'

function Home() {
  
    useEffect(() => {
      window.addEventListener('resize', () => {
        const myWidth  = window.innerWidth;
        const myHeight = window.innerHeight;
        console.log(`width: ${myWidth} | height: ${myHeight}`);
     })
    },[])
  return (
    <>
      <NavBar />
      <Container>
        <ProjectCard/>
      </Container>

    </>
  )
}
export default Home;