import React, { Component } from 'react';
import ParticleComponent from './ParticleComponent';
import MyHeader from './components/Nav/Nav';
import AboutPage from './components/Pages/AboutPage/About';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import PortfolioPage from './components/Pages/ProjectPage/Projects';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="dev-landing-page" id="root">
        <MyHeader />
        <ParticleComponent />
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
      </div>
    );
  }
}

export default App;
