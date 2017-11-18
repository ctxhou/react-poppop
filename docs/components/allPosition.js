import React, {Component} from 'react';
import PopPop from '../../src';
import {overlay} from '../../src/style';

export default class AllPosition extends Component {
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
    const positionList = [
      'topLeft', 'topCenter', 'topRight',
      'centerLeft', 'centerCenter', 'centerRight',
      'bottomLeft', 'bottomCenter', 'bottomRight',
    ]
    return (
      <div>
        <button className="btn btn-default" onClick={() => this.toggleShow(true)}>Show Modal</button>
        {show ?
          <div style={overlay}></div>
        : null}
        {positionList.map(position =>
          <PopPop key={position}
                  open={show}
                  position={position}
                  closeBtn={false}
                  closeOnEsc={true}
                  onClose={() => this.toggleShow(false)}
                  closeOnOverlay={true}
                  overlayStyle={{backgroundColor: 'transparent'}}>
            <div style={{textAlign: 'center'}}>
              <h3>{position}</h3>
            </div>
          </PopPop>
        )}
      </div>
    )
  }
}