import React, {useState, useCallback}from 'react';
import Container from './style';
import logoImg from '../../assets/icons/005-tree.svg';
// import menuBtn from '../../assets/icons/004-menu-1.svg';s
import NavButton from '../NavButton';

 function NavBar(props) {
  // let isClicked = true;
  // let display = 'flex'
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = useCallback(() => {
    setIsClicked(!isClicked);
    console.log(isClicked);
    
  }, [isClicked]);

   return(
    <Container>
    <div className="left-content">
      <img className="tree" src={logoImg} alt="tree-logo"/> 
      <div className="text-content">
        <h3>Felipe Chernicharo</h3>
        <h4>Dev Portifolio</h4>
      </div> 
    </div>  

    <div className="right-content">
      <NavButton title="Home" classname="home">{props.active === 'home'}</NavButton>
      <NavButton title="Projects" classname="projects">{props.active === 'projects'}</NavButton>
      <NavButton title="Skills" classname="skills">{props.active === 'skills'}</NavButton>
      <NavButton title="About" classname="about">{props.active === 'about'}</NavButton>
    
    </div>
    <div className="menu-section" 
      onClick = {handleClick}
      active={toString(isClicked)}
      // style={{display:`${display}`}}

      >
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav className="links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/about">About</a>
        </nav>
      </div>

   </Container>
   )
   
  }
  
  
  export default NavBar


