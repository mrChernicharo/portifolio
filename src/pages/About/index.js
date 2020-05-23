import React from 'react';
import {Line} from 'rc-progress';
import NavBar from '../../components/NavBar';
import Container from './styles';
import SectionBox from '../../components/SectionBox';
import UK from '../../assets/icons/united-kingdom.svg';
import Brazil from '../../assets/icons/brazil.svg';
import Spain from '../../assets/icons/spain.svg';
import France from '../../assets/icons/france.svg';

function About() {
  return (
    <>
      <NavBar active="about"/>
      <Container>
        <div className="content">
          <h1>About</h1>

          <SectionBox title="Bio">
            <p>Hi there! My name is Felipe Chernicharo, I'm from Rio de Janeiro, Brazil and I love programming!</p>
            <p>
  I’ve been learning programming skills for almolst two years now, studying hard every day and
  I fell that the time has come for me to dive deeper and take my skills to the next level. 
  Think it's time to get an actual job as a developer. </p>
          </SectionBox>

          <SectionBox title="Education">
            <ul>
              <li>Music degree at UNIRIO Federal University - 2005 to 2010</li>
              <li>Currently studying System Analisis and Development at UNIGRANRIO</li>
              <li>CCAA english course - 1998 to 2004</li>
            </ul>
          </SectionBox>

          <SectionBox title="Languages">
            <table>
              <tbody>
                <tr>
                  <td><img src={UK} alt="flag1"/></td>
                  <td>English</td>
                  <td>
                    <svg className="progress-bar">
                    <Line percent="83"
                      strokeColor="#0f2"
                      trailColor="#d3d3d3"
                      /> 
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td><img src={Brazil} alt="flag2"/></td>
                  <td>Portuguese</td>
                  <td>
                    <svg className="progress-bar">
                    <Line percent="100"
                      strokeColor="#0f2"
                      trailColor="#d3d3d3"
                      /> 
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td><img src={Spain} alt="flag3"/></td>
                  <td>Spanish</td>
                  <td>
                  <svg className="progress-bar">
                     <Line percent="58"
                      strokeColor="#0f2"
                      trailColor="#d3d3d3"
                      />  
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td><img src={France} alt="flag4"/></td>
                  <td>French</td>
                  <td>
                  <svg className="progress-bar">
                     <Line percent="70"
                      strokeColor="#0f2"
                      trailColor="#d3d3d3"
                      /> 
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </SectionBox>
          <SectionBox title="Tech Courses">
            <ul>
              <li>Udemy complete web development </li>
              <li>rocketseat omnistack 11.0</li>
              <li>rocketseat Gostack bootcamp</li>
              <li>rocketseat ES6</li>
              <li>rocketseat NodeJS</li>
              <li>scrimba python course</li>
              <li>curso em vídeo javascript</li>
              <li>curso em vídeo html 5, css 3 and JS</li>
              <li>rocketseat React Native</li>
              <li>Udemy MySQL</li>
            </ul>
          </SectionBox>
          <SectionBox title="Real World Experience"></SectionBox>
          <SectionBox title="Goals">
            <p></p>

            <p>No better moment to learn than now...</p>
          </SectionBox>
        </div>
      </Container>

    </>
  )
}
export default About;

//  style={{ paddingTop: '120px'}}