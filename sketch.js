const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(850,750);
    engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(100,100);
    ground = new Ground(600,height,1200,20)
	stone = new Stone(400,600,50,50);
	 rubber = ellipse(400,300,50,50);
	
}

function draw(){
    background('lightblue');
    Engine.update(engine);
	ground.display();
    hammer.display();
	stone.display();
	rubber.display();
}



