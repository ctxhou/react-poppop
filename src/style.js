export default {
  wrapper: {
    transition: 'opacity .2s linear',
    opacity: 0,
    visibility: 'visible',
    position: 'fixed',
    overflowX: 'hidden',
    overflowY: 'auto',
    zIndex: '1000',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    padding: '20px'
  },
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  alignItems: {
    Top: {
      alignItems: 'flex-start'
    },
    Center: {
      alignItems: 'center'
    },
    Bottom: {
      alignItems: 'flex-end'
    },
  },
  justifyContent: {
    Right: {
      justifyContent: 'flex-end'
    },
    Left: {
      justifyContent: 'flex-start'
    },
    Center: {
      justifyContent: 'center'
    }
  },
  content: {
    transition: 'all 0.3s',
    backgroundColor: 'white',
    borderRadius: '3px',
    zIndex: 2000,
    position: 'relative',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    overflow: 'scroll',
    maxWidth: '850px',
    padding: '10px 20px'
  },
  closeBtn: {
    float: 'right',
    color: '#000',
    textShadow: '0 1px 0 #fff',
    opacity: '0.3',
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '20px',
    width: '30px',
    height: '30px'
  },
  fullCloseBtn: {
    right: '0',
    top: '0',
    borderRadius: '0'
  },
  transitionStyles: {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exited: {opacity: 0}
  }
}