const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var button;
var ball;
var blower;
var blowerMouth;

var engine, world;

function setup() {
  createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world

  ball = new Ball(width / 2 + 80, height / 2 - 80, 25);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowermouth = new Blowermouth(width / 2 + 70, height / 2 + 70, 100, 90)

  button = createButton("Click to blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mouseClicked(blow);

}



function draw() {
  background(255, 255, 255);

  Engine.update(engine);


  ball.display();
  blower.display();
  blowermouth.display()
}

function blow() {
  Matter.Body.applyForce(ball.body, {
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0.05
  });
}