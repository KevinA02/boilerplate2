var options={
	isStatic:false,
	retitution:0.3,
	friction:0.5
      


}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
	if ( keycode === up_arrow){
   matter.body.applyForce(paperObject.body,papaerObject.body.position,{x:85,y:-85});

	}
}


