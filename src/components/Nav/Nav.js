import React, {useEffect, Component} from 'react';
import StickyHeader from 'react-sticky-header';
import './Nav.scss';

export default function MyHeader() {

return (
  <ul className="nav" style={{
    position: "fixed",
    top: "0",
    width: "100%",
    height:"3rem",
    display:"-ms-flexbox",
    display: "flex",
    backgroundColor:"rgb(170, 196, 206)",


 }}>
 <button onClick={e=>console.log(e)}>About</button>
 </ul>
)
  };

