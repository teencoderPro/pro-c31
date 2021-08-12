const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	ground=new Ground(400,697,800,8)
}


function draw() {
  rectMode(CENTER);
  background(190);
  
  ground.display()
  drawSprites();
 
}



