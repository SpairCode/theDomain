import React from 'react';
import PropTypes from "prop-types";
import styles from './login.less';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js';

class Login extends React.Component {

  componentDidMount () {
    
  }
  state = {
    color:[Math.random()*255, Math.random()*255, Math.random()*255]
  }

  randomColor = () => {
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
    )
  }

  render () {
    return (
      <div className={styles.loginBox}>
        <div id="canvas" className={styles.canvas}>
          <P5Wrapper sketch={sketch} />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.loginForm}/>
        </div>
      </div>
    )
  }
}

export default Login
