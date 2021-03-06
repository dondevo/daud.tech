import React, { useState } from 'react';
import './LandingPage.scss';
import Icons from '../../Icons/Icons';
import ScrollToNext from '../../Scroll/ScrollToNext';
import AnimatedTyping from '../AboutPage/Typing';

// const LandingPage = () => (
//   <div className="landing-page">
//     <main>
//       <div className="intro-wrapper">
//         <div className="intro-name">Hello, I'm Daud!</div>
//         <div className="tagline">
//         </div>
//       </div>
//       <Icons />
//       <ScrollToNext pageSelector=".about-page" />
//     </main>
//   </div>
// );
// export default LandingPage;

function LandingPage() {
  const [TypeAnimate, setTypeAnimate] = useState();

  return (
    <div className="landing-page">
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Daud!</div>
          <div className="tagline" />
          <AnimatedTyping>Full Stack Developer</AnimatedTyping>
        </div>
        <Icons />
        <ScrollToNext pageSelector=".about-page" />
      </main>
    </div>
  );
}
export default LandingPage;
