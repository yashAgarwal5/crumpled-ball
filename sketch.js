
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var dustbin1;
var paper1;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground1 = new ground(600,height,1200,20)
    dustbin1 = new dustbin(750,390,200,20);
	dustbin2 = new dustbin(650,390,20,120);
	dustbin3 = new dustbin(800,390,20,120);

	paper1= new paper(100,200,20,20); 


}


function draw() {
  rectMode(CENTER);
  background(0);

  
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:650,y:-650});
    }
    

 
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();

}









