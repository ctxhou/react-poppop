# React Poppop

> A responsive, mobile support, multi directions and easy to use modal for ReactJS. 

Compatible with React 15 and 16.

[![version](https://img.shields.io/npm/v/react-poppop.svg)](https://www.npmjs.com/package/react-poppop/)
[![travis](https://travis-ci.org/ctxhou/react-poppop.svg?branch=master)](https://travis-ci.org/ctxhou/react-poppop)
[![Build status](https://ci.appveyor.com/api/projects/status/y1a4ua5ld0gnl7wt?svg=true)](https://ci.appveyor.com/project/ctxhou/react-poppop)
![david](https://david-dm.org/ctxhou/react-poppop.svg)
[![codecov](https://codecov.io/gh/ctxhou/react-poppop/branch/master/graph/badge.svg)](https://codecov.io/gh/ctxhou/react-poppop)
[![Maintainability](https://api.codeclimate.com/v1/badges/b1738dd58819561b4e25/maintainability)](https://codeclimate.com/github/ctxhou/react-poppop)
![download](https://img.shields.io/npm/dm/react-poppop.svg)

### [Demo](https://ctxhou.github.io/react-poppop/)

![img](https://i.imgur.com/8HMXcOi.png)

## Features

* **Mobile support** — Responsive and support tap action.
* **Multi directions** — support 9 positions. ↑ ↗ ︎→ ↘ ︎↓ ↙ ︎← ↖ ︎⥁
* **Easily customize style**
* **React v16 portal** — Using react v16 official portal API. Also backward compatible with v15

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Minimum Config](#minimum-config)
  * [Multi directions - 9 positions](#multi-directions---9-positions)
  * [Controllable](#controllable)
- [Props](#props)
- [License](#license)

<!-- tocstop -->

## Installation

Install it with npm.

```js
npm install react-poppop --save
```

Then, import the module by module bundler like `webpack`, `browserify`

```js
// es6
import PopPop from 'react-poppop';

// not using es6
var PopPop = require('react-poppop');
```

UMD build is also available. If you do this, you'll need to include the dependencies:

For example:

```html
<script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
<script src="https://unpkg.com/react-poppop/dist/react-poppop.min.js"></script>
```

You can reference [standalone.html](https://github.com/ctxhou/react-poppop/blob/master/docs/standalone.html) example.

## Usage

### Minimum Config

The miminum usage of `PopPop` is set open as `true`.

```js
<PopPop open={true}>
  <h1>Title</h1>
  <p>Content</p>
</PopPop>
```

### Multi directions - 9 positions

The default position of `react-poppop` is `Top Center`.

There are 9 positions provided by `react-poppop`.

`'topLeft', 'topCenter', 'topRight', 'centerLeft', 'centerCenter', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight'`

Select a position you want and pass it to `position` props.

**Example**

```js
<PopPop open={true}
        position="topRight">
  <h1>Title</h1>
  <p>Content</p>
</PopPop>
```

### Controllable

You can set `onClose` callback, close by click `close button`, `esc button` and `overlay`.

```js
import React, {Component} from 'react';
import PopPop from 'react-poppop';

export default class Example extends Component {
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
        <button className="btn btn-default" onClick={() => this.toggleShow(true)}>Show Modal</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <h1>title</h1>
          <p>
            content
          </p>
        </PopPop>
      </div>
    )
  }
}
```

## Props

`* means required`

<table>
  <thead>
    <tr>
      <th>Props</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>open <b>*</b></td>
      <td><code>bool</code></td>
      <td></td>
      <td>Open the modal or not</td>
    </tr>
    <tr>
      <td>closeBtn</td>
      <td><code>bool</code></td>
      <td>false</td>
      <td>Whether to show close button</td>
    </tr>
    <tr>
      <td>closeOnOverlay</td>
      <td><code>bool</code></td>
      <td>true</td>
      <td>Whether to close modal on click overlay area</td>
    </tr>
    <tr>
      <td>closeOnEsc</td>
      <td><code>bool</code></td>
      <td>false</td>
      <td>Whether to close modal when click `esc`</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td><code>function</code></td>
      <td></td>
      <td>
        close modal callback
      </td>
    </tr>
    <tr>
      <td>position</td>
      <td>
        <code>topLeft</code><br/> 
        <code>topCenter</code><br/>
        <code>topRight</code><br/>
        <code>centerLeft</code><br/>
        <code>centerCenter</code><br/>
        <code>centerRight</code><br/>
        <code>bottomLeft</code><br/>
        <code>bottomCenter</code><br/>
        <code>bottomRight</code>
      </td>
      <td>topCenter</td>
      <td>
        Modal position
      </td>
    </tr>
    <tr>
      <td>overlayStyle</td>
      <td>
        <code>object</code>
      </td>
      <td>
        reference: <a href="https://github.com/ctxhou/react-poppop/blob/master/src/style.js#L17-L25">link</a>
      </td>
      <td>
        customize overlay style
      </td>
    </tr>
    <tr>
      <td>contentStyle</td>
      <td><code>object</code></td>
      <td>reference: <a href="https://github.com/ctxhou/react-poppop/blob/master/src/style.js#L48-L58">link</a></td>
      <td>customize content style</td>
    </tr>
  </tbody>
</table>

## License

MIT [@ctxhou](https://github.com/ctxhou)