import React from 'react';
import ReactDOM from 'react-dom';
import PopPop from "../";

ReactDOM.render(
  <PopPop overlay={true}
          position="center"
          display='show'
          closeBtn={true}
          onClose={onClose}
          overlay={true}
          overlayClick={true}>
    <div style={{"padding": "20px"}}>
      <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
      <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
    </div>
  </PopPop>, 
  document.getElementById('root'));

function onClose() {
  console.log('close')
}