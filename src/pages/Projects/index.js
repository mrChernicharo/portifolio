import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ProjectCard from '../../components/ProjectCard';
import Container from './styles'

import projectsList from './projects';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const myprojects = projectsList

    setProjects(myprojects)
  }, [projects]);
  

  return (
    <>
      {/* <NavBar active="projects"/> */}
      <NavBar />
      <Container style={{paddingBottom: '40px'}}> 
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        gif={project.gif}
        url={project.url}
        />
      ))}


        {/* <ProjectCard
        title={projects[1].title}
        description={projects[1].description}
        gif={projects[1].gif}
        url={projects[1].url}
        />

        <ProjectCard
        title={projects[2].title}
        description={projects[2].description}
        gif={projects[2].gif}
        url={projects[2].url}
        /> */}
      </Container>

    </>
  )
}
export default Projects;



//  style={{ paddingTop: '120px'}}