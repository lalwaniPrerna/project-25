
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust;
var dustI;

function preload()
{
   	dustI = loadImage("dustbin.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	dust = createSprite(590,520,120,100);
	dust.addImage(dustI);
	dust.scale=0.1;
	//Create the Bodies Here.
	groundObject = new Ground(590,600,1200,20);
	box1 = new Box(590,570,100,10);
	box2 = new Box(540,520,10,110);
	box3 = new Box(640,520,10,110);
	paper1 = new paper(100,595,25);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display();
  box1.display();
  box2.display();
  paper1.display();
  box3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:23,y:-23});
	}
  }



