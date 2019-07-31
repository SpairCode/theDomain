import Matter from './../../../node_modules/matter-js/build/matter.min';

export default function sketch(p){
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Events = Matter.Events,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

  var circles = [];
  
  let Circle = ( x, y, r,t) => {
    var options = {
      friction: 0.1,
      restitution: 3,
      isStatic: true
    }
  }

  Circle.show = () => {
    var t = ["p5.js","Processing","Ai","Ps","Data","Design","Indesign","Matter.js","Yasai","AE","QGis","D3.js","THREE.js","BootStrap","Html","css"];
    var r= [6,7,7,6,6,3,2,3,5,3,4,1,1,2,4,3];
    var pos = this.body.position;
    var angle = this.body.angle;
  
    p.push();
    p.translate(pos.x, pos.y);
  
    p.rotate(angle);
  
    if(window.innerWidth>450){
      p.strokeWeight(2.5);
    }else{
      p.strokeWeight(1.5);
    }
  
    p.stroke(20);
  
  
    p.fill('#2452FF');
    p.ellipse(0,0,this.r*2-2);
  
    p.stroke(255);
    p.noFill();
    p.arc(0, 0, this.r*2*0.85, this.r*2*0.85, -Math.PI/2, -Math.PI/4);
    p.arc(0, 0, this.r*2*0.85, this.r*2*0.85, -Math.PI/5, -Math.PI/7);
    p.fill(250);
    p.noStroke();
    p.textSize(this.r/3.5);
    p.textAlign('World');
    p.text(t,0,5);
    p.pop();
  }

  p.setup = () => {
    var ground,groundL,groundR,groundT;
    var engine,world;
    var mConstraint;
    var t = ["p5.js","Processing","Ai","Ps","Data","Design","Indesign","Matter.js","Yasai","AE","QGis","D3.js","THREE.js","BootStrap","Html","css"];
    var r= [6,7,7,6,6,3,2,3,5,3,4,1,1,2,4,3];

    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    engine = Engine.create();
  	world = engine.world;
  	Engine.run(engine);
  	var options = {
  		isStatic: true
  	}
  	ground = Bodies.rectangle( window.innerWidth/2, window.innerHeight, window.innerWidth*3,2, options);
  	groundL = Bodies.rectangle( 0, window.innerHeight/2, 2,window.innerHeight*3,options);
  	groundR = Bodies.rectangle( window.innerWidth, window.innerHeight/2, 2, window.innerHeight*3,options);
  	groundT = Bodies.rectangle( window.innerWidth/2, -3000,window.innerWidth*3,100,options);
  	World.add(world, [ground,groundL,groundR,groundT]);
  	for(var i = 0 ; i < t.length; i++){
  		var radius = p.map(r[i],0,10,30,70);
  		var n = p.map(window.innerWidth,400,2000,1,2.5);
  		circles.push(new Circle(Math.random(window.innerWidth),Math.random(-200,-2000), radius*n,t[i]));
  	}
  
  	var canvasmouse = Mouse.create(canvas.elt);
  	canvasmouse.pixelRatio = 2; 
  	var options = {
  		mouse: canvasmouse
  	}
  
  
  	mConstraint = MouseConstraint.create(engine,options);
  	World.add(world, mConstraint);
  }

  p.draw = (event) => {
    var t = ["p5.js","Processing","Ai","Ps","Data","Design","Indesign","Matter.js","Yasai","AE","QGis","D3.js","THREE.js","BootStrap","Html","css"];
    var r= [6,7,7,6,6,3,2,3,5,3,4,1,1,2,4,3];
    p.pixelDensity(2);
	  p.background ('#FC8AA3');
	  var percent = p.norm(Math.sin(Math.PI/2+p.frameCount/100), -1, 1);
	  var between = p.lerpColor(p.color('#97E4FF'),p.color('#FC8AA3'), percent);
	  p.fill(between);
	  p.noStroke();
	  p.rect(0,0,window.innerWidth,window.innerHeight);
  
	  p.fill(255,100);
	  p.noStroke();
	  var size = p.map(window.innerWidth,375,2000,22,30);
	  p.textSize(size);
	  p.textAlign('Hello');
	  // p.text("HI, 我是亚赛", window.innerWidth/2, window.innerHeight*0.4 );
	  // p.text("数据可视化设计师", window.innerWidth/2, window.innerHeight*0.45);
	  // p.text("设计工具制造玩家", window.innerWidth/2, window.innerHeight*0.5);
  
	  for(var i = 0; i < t.length; i++){
	  	circles[i].show();
	  }
  }
  
}