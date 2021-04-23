
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drone,boss,tree,mars,jupiter,sun,man,fan,bird,ring,ringimg,canvas;
var droneimg,bossimg,treeimg,marsimg,jupiterimg,sunimg,manimg,fanimg,birdimg;

function preload()
{
	droneimg=loadImage("whitehat/drone without background.png");
	bossimg=loadImage("whitehat/robot boss obstacle.png");
	treeimg=loadImage("whitehat/tree_obstacle-removebg-preview.png");
	marsimg=loadImage("whitehat/mars.obstacle-removebg-preview.png");
	jupiterimg=loadImage("whitehat/jupiter.png");
	sunimg=loadImage("whitehat/sun-removebg-preview.png");
	manimg=loadImage("whitehat/parachute_obstacle-removebg-preview.png");
	fanimg=loadImage("whitehat/obstacle_fan1-removebg-preview.png");
	birdimg=loadImage("whitehat/eagle_obstacle-removebg-preview.png");
	ringimg=loadImage("whitehat/ring.png")

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	createCanvas(1000,800);
	rectMode(CENTER);
	
    drone=createSprite(150,700,50,50);
	drone.addImage("drone",droneimg)
    drone.scale=0.5;



	ring=createSprite(500,100)
	ring.addImage("ring",ringimg);



	

	
}


function draw() {
	background(0);	
  
  if(keyDown(UP_ARROW)){

	drone.velocityY=-3;

  }
  if(keyDown(DOWN_ARROW)){
	  drone.velocityY=3;
  }

  if(keyDown(RIGHT_ARROW)){
	drone.velocityX=3;
}

if(keyDown(LEFT_ARROW)){
	drone.velocityX=-3;
}

drone.velocityY = drone.velocityY + 0.8






drone.display();
ring.display();

  drawSprites();
 
}

// function keyPressed() {
//  if (keyCode === LEFT_ARROW) {
// 	helicopterSprite.x=helicopterSprite.x-20
// 	translation={x:-20,y:0};
// 	Matter.Body.translate(packageBody,translation)
//  }
//  else if(keyCode===RIGHT_ARROW){
// 	helicopterSprite.x=helicopterSprite.x+20
// 	translation={x:+20,y:0};
// 	Matter.Body.translate(packageBody,translation)
//  }
// else if(keyCode===DOWN_ARROW){
// 	Matter.Body.setStatic(packageBody,false);

// }	

//   }




