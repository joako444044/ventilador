
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var fan;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  var fan_options ={
    friction:0.3,
    restitution:0.6,
    isStatic:true
  };
 
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  fan = Bodies.rectangle(200,200,180,30,fan_options);
  World.add(world,fan);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}
angle = 60

function draw() 
{
  
  background(51);
  Engine.update(engine);
  Body.rotate(fan,angle);
  push();
  translate(fan.position.x ,fan.position.y)
  rotate(angle);
  rect(0,0,180,30);
  pop();
  angle += 0.1
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  

}

