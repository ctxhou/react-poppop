import React from 'react';

const Button = ({children, onClick}) => (
  <a className="f4 link dim br1 ph4 pv3 mb2 dib white" href="#" style={{background: '#408BC9'}}
     onClick={onClick}>
     {children}
  </a>
);

export default Button;