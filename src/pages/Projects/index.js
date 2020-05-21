import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ProjectCard from '../../components/ProjectCard';
import Container from './styles'

function Projects() {
  
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
      <Container style={{ paddingTop: '120px'}}>
        <ProjectCard/>
      </Container>

    </>
  )
}
export default Projects;