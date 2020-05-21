import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import About from '../pages/About';
// import Repository from '../pages/Repository';

const Routes = () => (
  <>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/skills" exact component={Skills} />
    <Route path="/about" exact component={About} />
    </Switch>
  </>
);
export default Routes;
