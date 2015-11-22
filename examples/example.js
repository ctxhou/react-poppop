import React from 'react';
import PopPop from "../index";

React.render(
  <PopPop overlay={true}
          position="full"
          display='show'
          closeBtn={false}
          onClose={onClose}
          overlay={false}
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