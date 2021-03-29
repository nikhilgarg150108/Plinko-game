const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballParticles = [];
var plinkoObj = [];
var divisionWall = [];
var divisionHeight = 300;
var ground1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = Engine.world;

  ground1 = new Ground(width/2, 795, width, 10);

  for(var k=0; k<=width; k=k+80) {
    divisionWall.push (new divisionWall (k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=40; j<=width; j=j+50) {
    plinkoObj.push (new Plinko (j, 75));
  }
  for(var j=15; j<=width-10; j=j+50) {
    plinkoObj.push (new Plinko (j, 175));
  }
  for(var j=40; j<=width; j=j+50) {
    plinkoObj.push (new Plinko (j, 275));
  }
  for(var j=15; j<=width-10; j=j+50) {
    plinkoObj.push (new Plinko (j, 375));
  }

  //createSprite(400, 200, 50, 50);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  if(frameCount%60===0) {
    ballParticles.push(new Particle(random(width/2-10,width/2+10), 10, 10));
  }

  for(var a=0; a<plinkoObj.length; a++) {
    plinkoObj[a].display();
  }

  for(var i=0; i<ballParticles.length; i++) {
    ballParticles[i].display();
  }

  for(var l=0; l<divisionWall.length; l++) {
    divisionWall[l].display();

  ground1.display();
  }
}