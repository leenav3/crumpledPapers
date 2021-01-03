
var ground,box1,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world;
	ground=Bodies.rectangle(width/2,height,width,20,{isStatic:true})
	World.add(world,ground)
	paper=new Paper(100,600,55);
	box1 = new Box(width-150,height-20,200,20);
	Engine.run(engine);
}

function draw() {
  background("yellow");
  paper.display();
  box1.display();
  

  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,width,20);
  
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:170,y:-250})
	}
	
}