
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 50;
var dot,dot1,dot2,dot3,dot4,dot5;
var img,Img;
function preload(){
Img = loadImage("img.png")

}


function setup() {
	createCanvas(1200, 500);
 img = createSprite(800,250,10,10);
 img.addImage(Img);
 img.scale=0.30;
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(220, 300, 25)
	bob2 = new Bob(270, 300, 25)
	bob3 = new Bob(320, 300, 25)
	bob4 = new Bob(370, 300, 25)
	bob5 = new Bob(420, 300, 25)
	roof1 = new Roof(350, 100, 400, 20)
	chain1 = new pendulum(bob1.body, roof1.body, -(bobDiameter * 2), 3)
	chain2 = new pendulum(bob2.body, roof1.body, -bobDiameter, 0)
	chain3 = new pendulum(bob3.body, roof1.body, 2, 0)
	chain4 = new pendulum(bob4.body, roof1.body, bobDiameter, 0)
	chain5 = new pendulum(bob5.body, roof1.body, bobDiameter * 2, 0)
	dot = new Dot (400,100,10,10);
	dot1 = new Dot (450,100,10,10);
	dot2 = new Dot (350,100,10,10);
	dot3 = new Dot (400,100,10,10)
	dot4 = new Dot (300,100,10,10)
	dot5 = new Dot (250,100,10,10)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("orange");

	drawSprites();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob1.display();
	dot.display();
	dot1.display();
	dot2.display();
	dot3.display();
	dot4.display();
	dot5.display();

}

function mouseDragged() {

Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -200, y: 200})

}

