import React /*, {useEffect}*/ from 'react';
import NavBar from '../../components/NavBar';
import Container from './styles'
import githubImg from '../../assets/icons/github.svg';
import linkedinImg from '../../assets/icons/linkedin.svg';
import whatsappImg from '../../assets/icons/whatsapp.svg';
import gmailImg from '../../assets/icons/gmail.svg';
import faceImg from '../../assets/icons/009-facebook.svg';

function Home() {

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     const myWidth  = window.innerWidth;
  //     const myHeight = window.innerHeight;
  //     console.log(`width: ${myWidth} | height: ${myHeight}`);
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

          <div className="info">
            <a href="https://www.linkedin.com/in/felipe-chernicharo-27ba911a8/" target="blank">
              <img src={linkedinImg} alt="linkedin link"/>
            </a>
          </div>  

          <div className="info">

            <img src={whatsappImg} alt="whatsapp"/>

            {/* <p>+55 21 98878-8359</p> */}
          </div>  
          <div className="info">
            <img src={gmailImg} alt="gmail"/>
            {/* <p>felipe.chernicharo@gmail.com</p> */}
          </div>

        </div>
      </Container>

    </>
  )
}
export default Home;