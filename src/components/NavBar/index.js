import React from 'react';
import Container from './style';
import logoImg from '../../assets/icons/005-tree.svg';
import menuBtn from '../../assets/icons/004-menu-1.svg';
import NavButton from '../NavButton';

 function NavBar() {
  // const [activeBtn, setActiveBtn] = useState(false);


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
      <NavButton title="Home"></NavButton>
      <NavButton title="Projects"></NavButton>
      <NavButton title="Skills"></NavButton>
      <NavButton title="About"></NavButton>
    </div>
    <div className="menu">
      <img src={menuBtn} alt="menu"/>
    </div>
   </Container>
   )

}


export default NavBar