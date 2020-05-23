import React from 'react';
import NavBar from '../../components/NavBar';
import SkillTable from '../../components/SkillTable';
import Container from './styles'


function Skills() {
  return (
    <>
      {/* <NavBar active="skills"/> */}
      <NavBar />


      <Container style={{ paddingTop: '68px'}}>
        <div className="content">
          <h1>Skills</h1>
          <SkillTable title="Main Weapons"/>
          <SkillTable title="Combat Gear"/>
          <SkillTable title="Tool Belt"/>
        </div>
      </Container>

    </>
  )
}
export default Skills;