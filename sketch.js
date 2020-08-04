var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite;
var box1,box2,box3,boxPosition,boxx,boxBase;
var boxLeftBody
var engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}



function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);
	
	



	packageSprite=createSprite(250, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(250, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

		engine = Engine.create();
		world = engine.world;

		box1 = new Container(315,619,20,80);
		box2 = new Container(485,619,20,80);
		box3 = new Container(400,660,200,20);
		box3.fill=color(255,0,0); 
		boxPosition=width/2-100, boxx=610;
		 boxLeftBody =
		Bodies.rectangle(boxPosition+20, boxx,
		  boxBase=createSprite(boxPosition+100, boxx+40, 200,20));

	var ground_options ={
        isStatic: true
    }
	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)

	

	packageBody = Bodies.circle(helicopterSprite.x , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);
	 

		
	//	ground  = new Ground(200,390,400,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  translate(helicopterSprite.x ,packageBody.x)


  helicopterSprite.velocityX=0
    box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false); 
 } 
 if (keyCode === LEFT_ARROW) {

	helicopterSprite.x=helicopterSprite.x-20;
	translation={x:-20,y:0}
	Matter.Body.translate(packageBody,translation)
	/*packageBody.velocityX =-2

	packageSprite.velocityX=-2
    helicopterSprite.velocityX=-2*/
 }
 if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody,translation)
}

}





