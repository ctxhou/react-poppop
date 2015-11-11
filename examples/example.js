import React from 'react';
import PopPop from "../index";

React.render(
  <PopPop overlay={true}
          position="center"
          display='show'
          onClose={onClose}
          overlayClick={true}>
    <div>
      <h1>sjidfdsfsjdjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
    </div>
  </PopPop>, 
  document.getElementById('root'));

function onClose() {
  console.log('close')
}