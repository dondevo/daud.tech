import React, { Component } from 'react';
import ParticleComponent from './ParticleComponent';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          textAlign: 'center'
        }}
      >
        <ParticleComponent />
        <div className="App-header">
          I am Daud!
          <h1>Full Stack Developer || Student</h1>
        </div>
      </div>
    );
  }
}

export default App;
