import React from 'react';
import StickyHeader from 'react-sticky-header';
import './Nav.scss';

const MyHeader = () => (
  <nav>
    <StickyHeader
      // This is the sticky part of the header.
        header={(
<div className="nav">
      {' '}
            <style jsx="true">
              {`
              .menu__item:hover {
                border-bottom: 2px solid;
              }
            `}
          </style>
          <ul className="menu">
            <li className="menu__item">Hello</li>
            <li className="menu__item">Projects</li>
      <li className="menu__item">Blog</li>
  </ul>
        </div>
)}
        headerOnly
    />
  </nav>
);

export default MyHeader;
