import React from 'react';
// import { Link } from 'react-router-dom';
import Container from './styles';


import gitLogo from '../../assets/icons/github_black.svg';

// import gif1 from '../../assets/gifs/mosquito_killer_ok.gif';


function ProjectCard(props) {
  return ( 
  <Container>
    <img className="gif" src={props.gif} alt="gif1"/>
    <div className="text-area">
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <a href={props.url} target="blank"> 
        <button  type="button">
            <img src={gitLogo} alt="github"/>
            <span>check it out</span>
        </button>
      </a>   
      
    </div>
    
  </Container>
  )
};

export default ProjectCard;