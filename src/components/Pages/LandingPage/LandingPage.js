import React from 'react';
import './LandingPage.scss';
import Icons from '../../Icons/Icons';
import ScrollToNext from '../../Scroll/ScrollToNext';

const LandingPage = () => (
  <div className="landing-page">
    <main>
      <div className="intro-wrapper">
        <div className="intro-name">Hello, I'm Daud!</div>
        <div className="tagline">Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja</div>
      </div>
      <Icons />
      <ScrollToNext pageSelector=".about-page" />
    </main>
  </div>
);

export default LandingPage;
