import React from 'react';
import Container from './styles';

import gitLogo from '../../assets/icons/github.svg';
import gif1 from '../../assets/gifs/mosquito_killer_ok.gif';


function ProjectCard(props) {
  return ( 
  <Container>
    <img className="gif" src={gif1} alt="gif1"/>
    <div className="text-area">
      <h3>Mosquito Killer</h3>
      <p>python3/pygame evaluation project part of the discipline Introduction to Software Development
      in the Software Analisis and Developmet graduation course at UNIGRANRIO University   
      </p>
      <button>
        <img src={gitLogo} alt="github"/>
        <span>check it out</span>
      </button>
    </div>
    
  </Container>
  )
};

export default ProjectCard;