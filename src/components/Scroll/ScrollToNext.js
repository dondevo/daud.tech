import React, { Component } from 'react';
import { toElement as scrollToElement } from './Scroll';

// import './style.scss';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div className="scroll-to-next">
        <div className="arrow bounce">
          <div className="scroll-text">Click Me</div>
          <button
            className="fas fa-chevron-down fa-2x"
            href="#"
            onClick={e => this.scrollToNext()}
          />
        </div>
      </div>
    );
  }
}

export default ScrollToNext;
