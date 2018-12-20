import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from './Scroll';
import './ScrollToPrevious.scss';

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div className="scroll-to-previous" onClick={e => this.scrollToPrevious()} role="button">
        <div className="arrow bounce">
          <div className="scroll-text">Go back!</div>
          <button className="fas fa-chevron-up fa-2x" href="#" />
        </div>
      </div>
    );
  }
}

ScrollToPrevious.propTypes = {
  pageSelector: PropTypes.string
};

export default ScrollToPrevious;
