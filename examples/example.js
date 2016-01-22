import React from 'react';
import ReactDOM from 'react-dom';
import PopPop from "../";

ReactDOM.render(
  <PopPop overlay={true}
          position="full"
          display='show'
          closeBtn={true}
          onClose={onClose}
          overlay={true}
          overlayClick={true}
          backgoundStyle={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
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