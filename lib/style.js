'use strict';

module.exports = {

  wrapper: {
    opacity: '1',
    visibility: 'visible',
    position: 'fixed',
    overflow: 'auto',
    zIndex: '100001',
    transition: 'all 0.3s',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center'
  },

  content: {
    transition: 'all 0.3s',
    backgroundColor: 'white',
    borderRadius: '3px',
    zIndex: 100,
    padding: '20px',
    position: 'relative'
  },

  center: {
    verticalAlign: 'middle',
    justifyContent: 'center'
  },

  left_center: {
    verticalAlign: 'middle',
    justifyContent: 'flex-start'
  },

  right_center: {
    verticalAlign: 'middle',
    justifyContent: 'flex-end'
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

  closeBtn: {
    position: 'absolute',
    right: '9px',
    top: '9px'
  }
};