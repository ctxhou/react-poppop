import React, {Component} from 'react';
import PopPop from '../../src';
import {overlay} from '../../src/style';
import Button from './Button';

export default class ShortContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  toggleShow = show => {
    this.setState({show});
  }

  render() {
    const {show} = this.state;
    return (
      <div>
        <Button onClick={() => this.toggleShow(true)}>
          Short content
        </Button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <div style={{textAlign: 'center'}}>
            <div>
              <h1>Short Content</h1>
              <p>
                super short.
              </p>
            </div>
          </div>
        </PopPop>
      </div>
    )
  }
}