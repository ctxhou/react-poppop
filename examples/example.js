import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PopPop from "../lib";
import Full from './full';
import Center from './center';
class Example extends Component {

  constructor(props) {
    super(props);
    this.fullOpen = this.fullOpen.bind(this);
    this.fullClose = this.fullClose.bind(this);
    this.centerOpen = this.centerOpen.bind(this);
    this.centerClose = this.centerClose.bind(this);
    this.state = {full: false, center: false};
  }

  fullOpen() {
    this.setState({full: true});
  }

  centerOpen() {
    this.setState({center: true});
  }

  fullClose() {
    this.setState({full: false});
  }

  centerClose() {
    this.setState({center: false});
  }

  render() {
    const {full, center} = this.state;
    return (
      <div>
        <button onClick={this.fullOpen}>Full open</button>
        <button onClick={this.centerOpen}>Center open</button>
        {full ? <Full onClose={this.fullClose}/> : null}
        {center ? <Center onClose={this.centerClose}/> : null}
      </div>
    )
  }
}
ReactDOM.render(
  <Example/>, 
  document.getElementById('root')
);