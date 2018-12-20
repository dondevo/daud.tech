import React from 'react';
import StickyHeader from 'react-sticky-header';
import './Nav.scss';

const MyHeader = () => (
  <StickyHeader
    header={(
<nav>
  <ul className="nav">
                <li className="menu__item" href="#">
            Hello
    </li>
          <li className="menu__item">Projects</li>
                <li className="menu__item">Blog</li>
              </ul>
              </nav>
)    }
  />
);

export default MyHeader;
