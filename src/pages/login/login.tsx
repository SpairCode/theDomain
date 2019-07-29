import React from 'react';
import PropTypes from "prop-types";
import styles from './login.less';
import Matter from '../../../node_modules/matter-js/build/matter.min';

class Login extends React.Component {

  demo = () => {
    // Engine是引擎，Render是渲染器，World是表演环境，Bodies可以用来创建各种形状的物体。
    let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    
    let engine = Engine.create();
    //render(渲染器)将要渲染的物理引擎是之前所创建的engine，而渲染的对象是html网页的body
    let render = Render.create({
      element: document.getElementById('canvas'),
      engine: engine
    });
    
    //参数(500,170,40,260）中，前两个是物体坐标，后两个分别是宽度和长度。 
    //需要注意的是，这里的坐标系统中，500和170是矩形的中心所在位置
    //而html的canvas中坐标描述的是矩形的左上角。
    let boxA = Bodies.rectangle(20, 20, 200, 200);
    //var boxB = Bodies.rectangle(450, 50, 80, 80);
    //将isStatic设为true，即是静止的
    let ground = Bodies.rectangle(400, 510, 810, 60, { isStatic: true });
    
    // add all of the bodies to the world
    World.add(engine.world, [boxA, ground]);
    Engine.run(engine);
    Render.run(render);
  }

  componentDidMount () {
    this.demo()
  }

  render () {
    return (
      <div className={styles.loginBox}>
        <div id="canvas" className={styles.canvas}/>>
        <div className={styles.contentBox}>
          This is Demo
        </div>
      </div>
    )
  }
}

export default Login
