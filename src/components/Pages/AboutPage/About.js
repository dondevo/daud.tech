import React from 'react';
import { AnimatedTyping } from './Typing';
import ScrollToNext from '../../Scroll/ScrollToNext';
import './About.scss';

const AboutPage = () => (
  <div className="about-page">
    <div className="content-grid">
      <h1>About</h1>
      <div className="about-wrapper" />
      <div className="about-content" />
      <p>
        <AnimatedTyping>HELLO!</AnimatedTyping>
      </p>
    </div>
    <ScrollToNext pageSelector=".portfolio-page" />
  </div>
);

export default AboutPage;
