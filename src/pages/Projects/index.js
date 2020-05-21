import React from 'react';
import NavBar from '../../components/NavBar';
import ProjectCard from '../../components/ProjectCard';
import Container from './styles'

function Home() {
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