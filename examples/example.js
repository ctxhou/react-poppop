import React from 'react';
import { render } from 'react-dom';
import PopPop from "../index";

render(
  <PopPop overlay={true}
          position="center"
          display='show'
          overlayClick={true}>
    <div>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
    </div>
  </PopPop>, 
  document.getElementById('root'));
