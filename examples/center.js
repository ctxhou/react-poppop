import React, {Component} from 'react';

import PopPop from "../lib";


export default class Center extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <PopPop overlay={true}
                position="center"
                display='show'
                closeBtn={true}
                closeOnEsc={true}
                onClose={this.props.onClose}
                overlay={true}
                overlayClick={this.props.onClose}
                backgroundStyle={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <div style={{"padding": "20px"}}>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdjdfoisdfsdfjisdfjisdfijsifjsdifjisfjsfisf</h1>
            <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
            <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
            <h1>sjidfdsfsjdifjsdoifjoisjdfoi</h1>
          </div>
        </PopPop>
    )
  }
}