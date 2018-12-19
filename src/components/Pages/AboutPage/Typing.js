import Typing from 'react-typing-animation';
import React from 'react';

export const AnimatedTyping = () => (
  <Typing loop>
    <span>Hello I'm Daud!</span>
    <Typing.Backspace count={20} />
  </Typing>
);

export default AnimatedTyping;
