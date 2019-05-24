import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';



const particlesOptions = {

  particles : {
    number: {
      value: 100,
      density: {
        enable : true,
        value_area : 800 
      }
    }
  }
}


function App() {
  return (
    <div className="demo-big-content">
    <Particles className = 'particles' params = {particlesOptions} />
    <Layout>
        <Header title="Akshay Panchal" className="header" scroll>
            <Navigation>
                <Link to ="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Akshay Panchal">
            <Navigation>
                <Link to ="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
