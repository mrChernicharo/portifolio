import React from "react";
import { Line } from "rc-progress";
import NavBar from "../../components/NavBar";
import Container from "./styles";
import SectionBox from "../../components/SectionBox";
import UK from "../../assets/icons/united-kingdom.svg";
import Brazil from "../../assets/icons/brazil.svg";
import Spain from "../../assets/icons/spain.svg";
import France from "../../assets/icons/france.svg";

function About() {
  return (
    <>
      {/* <NavBar active="about"/> */}
      <NavBar />

      <Container>
        <div className="content" style={{ paddingBottom: "40px" }}>
          <h1>About</h1>

          <SectionBox title="Bio">
            <p>
              Hi there! My name is Felipe Chernicharo, I'm from Rio de Janeiro,
              Brazil and I love programming!
            </p>
            <p>
              I’ve been learning programming for almost two years now, studying
              hard every day and it's been a couple of mounths since I finally
              landed my first Frontend Developer job in Versátil, a Brazilian
              tech company that provides software and data management services
              to some major communications enterprises in Brazil.
            </p>
          </SectionBox>

          <SectionBox title="Education">
            <ul>
              <li>Music degree at UNIRIO Federal University - 2005 to 2010</li>
              <li>
                Currently studying System Analisis and Development at UNIGRANRIO
              </li>
              <li>CCAA english course - 1998 to 2004</li>
            </ul>
          </SectionBox>

          <SectionBox title="Languages">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={UK} alt="flag1" />
                  </td>
                  <td>English</td>
                  <td>
                    <svg className="progress-bar">
                      <Line
                        percent="83"
                        strokeColor="#0f2"
                        trailColor="#d3d3d3"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Brazil} alt="flag2" />
                  </td>
                  <td>Portuguese</td>
                  <td>
                    <svg className="progress-bar">
                      <Line
                        percent="100"
                        strokeColor="#0f2"
                        trailColor="#d3d3d3"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Spain} alt="flag3" />
                  </td>
                  <td>Spanish</td>
                  <td>
                    <svg className="progress-bar">
                      <Line
                        percent="58"
                        strokeColor="#0f2"
                        trailColor="#d3d3d3"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={France} alt="flag4" />
                  </td>
                  <td>French</td>
                  <td>
                    <svg className="progress-bar">
                      <Line
                        percent="70"
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
              <li>
                Udemy complete web development:
                <br />
                Html, CSS3, Javascript, ES6, JQuery, PHP, PDO, Ajax, PhpMyAdmin,
                Bootstrap, Sass, MySQL.
              </li>
              <li>
                Angular - the complete guide <br />
                Angular 10, Typescript, RxJS, NgRx, Firebase, AngularUniversal,
                NestJS
              </li>
              <li>
                Rocketseat Gostack Bootcamp 11.0
                <br />
                React, React Native, NodeJS, Typescript.
              </li>
              <li>Rocketseat ES6</li>
              <li>
                Cod3r - Angular 9 <br />
                Typescript, Angular Material, JSON Server.
              </li>
              <li>Rocketseat NodeJS</li>
              <li>Scrimba Python course</li>
              <li>Curso em vídeo javascript</li>
              <li>Curso em vídeo html 5, css 3 and JS</li>
              <li>Rocketseat React Native</li>
              <li>Udemy Advanced and Object-Oriented Javascript</li>
            </ul>
          </SectionBox>
          <SectionBox title="Real World Experience">
            <ul>
              <li style={{ paddingBottom: "26px" }}>
                Internship at Versátil
                <br />
                <a href="http://www.versatec.com.br" target="blank">
                  versatec.com.br
                </a>
              </li>
              <li style={{ paddingBottom: "30px" }}>
                Webmaster of Laços psychology clinic's website
                <br />
                <a href="http://www.clinicalacos.com.br" target="blank">
                  clinicalacos.com.br
                </a>
              </li>
              <li>
                Webmaster of music group Sexteto Sucupira's website
                <br />
                <a href="http://www.sextetosucupira.com" target="blank">
                  sextetosucupira.com
                </a>
              </li>
            </ul>
          </SectionBox>
          <SectionBox title="Goals">
            <p class="red-line">&hearts; for coding and solving problems!</p>
            <p>
              Learning new stuff and expanding my comprehension on how things
              work under the hood is like fuel to me!
            </p>

            <p>
              As you might notice I have a music degree. Indeed a good share of
              my life I have spent working as a musician. I still love to play,
              but I decided to take a hard turn and plunge deep into
              programming.
            </p>
            <p>
              I believe these difficult times have proven that the choice I've
              made is correct and still, my music background sure helps me a lot
              when working around with teams and when some creativity is needed.
            </p>
            <p>
              ...All that said, let's code! For there's no better moment to
              learn than now...
            </p>
          </SectionBox>
        </div>
      </Container>
    </>
  );
}
export default About;

//  style={{ paddingTop: '120px'}}
