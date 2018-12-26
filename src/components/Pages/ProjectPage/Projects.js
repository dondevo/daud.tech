import React from 'react';
import ScrollToPrevious from '../../Scroll/ScrollToPrevious';
import './Projects.scss';

const PortfolioPage = () => (
  <div className="portfolio-page">
    <h1> Portfolio</h1>
    <div className="content-grid">
      <div className="portfolio-wrapper" />
    </div>

    <ScrollToPrevious pageSelector=".about-page" />
  </div>
);
export default PortfolioPage;
