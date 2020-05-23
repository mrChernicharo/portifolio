import React/*, { useEffect }*/ from 'react';
import projects from './projects';
import NavBar from '../../components/NavBar';
import ProjectCard from '../../components/ProjectCard';
import Container from './styles'

function Projects() {
  
    // useEffect(() => {
    //   window.addEventListener('resize', () => {
    //     const myWidth  = window.innerWidth;
    //     const myHeight = window.innerHeight;
    //     console.log(`width: ${myWidth} | height: ${myHeight}`);
    //  })
    // },[])
  return (
    <>
      {/* <NavBar active="projects"/> */}
      <NavBar />
      <Container>
        <ProjectCard
        title={projects[0].title}
        description={projects[0].description}
        gif={projects[0].gif}
        />
        <ProjectCard
        title={projects[1].title}
        description={projects[1].description}
        gif={projects[1].gif}

        />
        <ProjectCard
        title={projects[2].title}
        description={projects[2].description}
        gif={projects[2].gif}

        />
      </Container>

    </>
  )
}
export default Projects;



//  style={{ paddingTop: '120px'}}