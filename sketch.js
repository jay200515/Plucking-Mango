const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var mango1, mango2, mango3, mango4, mango5;
var boy, tree, launcherobject, world;
var ground, stoneObj;
var launchingForce = 100;

function preload(){
	boy=loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground = createSprite(400, 200, 800, 20);
	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1010, 70, 30);
	mango3 = new Mango(1000, 700, 30);
	mango4 = new Mango(1000, 230, 40);
	mango5 = new Mango(900, 230, 40);
	stoneObj=new Stone(235,420,30); 
 
	tree = new Tree(1050, 580);
	ground = new Ground(width/2,600, width, 20);
	launcherobject = new launcher(stoneObj.body,{x:235, y:420})
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  this.image = loadImage("Sprites/boy.png");
	detectollision(stoneObj, mango1);
	detectollision(stoneObj, mango2);
	detectollision(stoneObj, mango3);
	detectollision(stoneObj, mango4);
	detectollision(stoneObj, mango5);
	boy.display(); 
  	mango1.display();
  	mango2.display();
  	mango3.display();
  	mango4.display();
	mango5.display();
	ground.display();
	stoneObj.display();
	ground.display();
	launcherobject.display();
	tree.display();
  
 
}

function mouseReleased(){
	launcherobject.fly();
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mousrY})
}
function KeyPressed() {
	if (KeycODE === 32) {
		matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherobject.attach(stoneObj.body);
	}
}

function detectollision(Lstone, Lmango){
	mangoBodyPosition = Lmango.body.setPosition
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r)
	{
		Matter.Body.setStatic(Lmango.body, false);
	}
}



