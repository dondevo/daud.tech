import React from 'react';
import { AnimatedTyping } from './Typing';
import ScrollToNext from '../../Scroll/ScrollToNext';
import ScrollToPrevious from '../../Scroll/ScrollToPrevious';
import './About.scss';

const AboutPage = () => (
  <div className="about-page">
    <div className="content-grid">
      <h1>About</h1>
      <div className="about-wrapper" />
      <div className="about-content" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel imperdiet leo. Quisque ac
        quam semper, commodo velit ac, suscipit massa. Cras pellentesque nisl metus, quis malesuada
        lorem faucibus eget. Nulla orci justo, consequat at aliquam ut, consectetur vel velit. Proin
        imperdiet ut dolor vel faucibus. Duis quis tellus enim. Curabitur ac euismod dolor. Vivamus
        placerat nunc quis sem suscipit, nec mattis mauris vestibulum. Quisque a sem aliquet,
        pretium arcu et, volutpat magna. Fusce suscipit ut velit ut scelerisque. Fusce laoreet
        cursus ex, nec ultricies dui luctus nec. Donec sollicitudin mi sed sapien efficitur, sit
        amet volutpat leo luctus. Nam consectetur lorem non tellus malesuada gravida. Morbi vitae
        bibendum nibh. Pellentesque feugiat ex nisl, in sodales tortor fringilla vitae. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Ut pellentesque odio eu tellus semper, id
        luctus orci blandit. Curabitur quis leo ut nisi interdum condimentum. Nulla vitae urna mi.
        In rutrum justo ut ipsum suscipit, a ultricies quam pretium.
      </p>
    </div>
    <ScrollToNext pageSelector=".portfolio-page" />
    <ScrollToPrevious pageSelector=".landing-page" />
  </div>
);

export default AboutPage;
