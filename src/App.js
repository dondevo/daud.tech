import React, { Component } from 'react';
import ParticleComponent from './ParticleComponent';
import MyHeader from './components/Nav/Nav';
import AboutPage from './components/Pages/AboutPage/About';
import LandingPage from './components/Pages/LandingPage/LandingPage';

const particleStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  textAlign: 'center'
};
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="parent" style={particleStyle}>
        <MyHeader />
        <ParticleComponent />
        <LandingPage />
        <AboutPage />
        <h1>I am Daud!</h1>
        <p>Full Stack Developer || Student</p>
      </div>
    );
  }
}

export default App;
