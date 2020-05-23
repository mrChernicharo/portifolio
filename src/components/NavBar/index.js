import React from 'react';
import Container from './style';
import logoImg from '../../assets/icons/005-tree.svg';
import menuBtn from '../../assets/icons/004-menu-1.svg';
import NavButton from '../NavButton';

 function NavBar(props) {
  // const [activeBtn, setActiveBtn] = useState(false);
  // console.log(props)


   return(
    <Container>
    <div className="left-content">
      <img src={logoImg} alt="tree-logo"/> 
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
    <div className="menu" 
    // onClick={}
    >
      <img src={menuBtn} alt="menu"/>
    </div>
   </Container>
   )

}


export default NavBar