import React, { useState } /*, {useEffect}*/ from 'react';
import NavBar from '../../components/NavBar';
import Container from './styles'
import githubImg from '../../assets/icons/github.svg';
import linkedinImg from '../../assets/icons/linkedin.svg';
import whatsappImg from '../../assets/icons/whatsapp.svg';
import gmailImg from '../../assets/icons/gmail.svg';
import faceImg from '../../assets/icons/009-facebook.svg';



function SideBar(props){
  
  return (
    <div style={{
      position: 'absolute',
      width: `${props.width}`,
      height: '30px',
      marginLeft: `${props.margin}`,
      fontSize: '12px',
      background: '#242526',
      border: '1px solid #dadce1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      cursor: 'text',
    }}>{props.text}</div>
    );
  }
  
  
  
  function Home() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
  
    function handleSideBar1(){
      setOpen(!open);
    }
    function handleSideBar2(){
      setOpen2(!open2);
    }
    
    // useEffect(() => {
      
  //  })
  // },[])

  return (
    <>
      {/* <NavBar active="home"/> */}
      <NavBar/>
      <Container>
        <div className="text-box">
          <h1>Hello World</h1>
          <h3>I am Felipe</h3>
          <br />
          <br />
          <p>Welcome to my developer portifolio!</p>
        </div>

        <div className="follow-me">

          <div className="info" onClick={handleSideBar1}>
            <img src={whatsappImg} alt="whatsapp"/>
            {open && <SideBar text="+55 21 98878-8359" width="180px" margin="110px"/>}
          </div>  

          <div className="info" onClick={handleSideBar2}>
            <img src={gmailImg} alt="gmail"/>
            {open2 && <SideBar text="felipe.chernicharo@gmail.com" width="240px" margin="140px"/>}
          </div>

          <div className="info">
            <a href="https://www.facebook.com/felipe.chernicharo" target="blank">
              <img src={faceImg} alt="linkedin link"/>
            </a>
          </div> 

          <div className="info">
            <a href="https://www.github.com/mrChernicharo" target="blank">
              <img src={githubImg} alt="github link"/>
            </a>
          </div>  

          <div className="info" style={{marginTop: '-6px'}}>
            <a href="https://www.linkedin.com/in/felipe-chernicharo-27ba911a8/" target="blank">
              <img src={linkedinImg} alt="linkedin link"/>
            </a>
          </div>  
        </div>
      </Container>

    </>
  )
}
export default Home;