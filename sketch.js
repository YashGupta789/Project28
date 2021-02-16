const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,bgImg;

function preload(){
	boy=loadImage("boy.png");
  bgImg=loadImage("bg.image.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new Mango(1090,80,30);
  mango2=new Mango(995,80,30);
  mango3=new Mango(900,200,30);
  mango4=new Mango(960,160,30);
  mango5=new Mango(1050,150,30);
  mango6=new Mango(1000,230,30);
  mango7=new Mango(1100,200,30);
  mango8=new Mango(1150,140,30);
  mango9=new Mango(1170,230,30);
  mango10=new Mango(1230,205,30);
	tree=new Tree(1050,590);
	ground=new Ground(width/2,600,width,20);
  ground.visible=false;
  stone=new Stone(135,440,30);
  
  slingShot=new SlingShot(stone.body,{x:135,y:440});
  Engine.run(engine);

}

function draw() {
  imageMode(CENTER);
  image(bgImg,650,300,1300,680);

  image(boy,200,515,200,300);

   tree.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   ground.display();
   stone.display();
   slingShot.display();
   detectcollision(stone,mango1);
   detectcollision(stone,mango2);
   detectcollision(stone,mango3);
   detectcollision(stone,mango4);
   detectcollision(stone,mango5);
   detectcollision(stone,mango6);
   detectcollision(stone,mango7);
   detectcollision(stone,mango8);
   detectcollision(stone,mango9);
   detectcollision(stone,mango10);
   
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:135,y:440});
      slingshot.reattach(stone.body);
    }
}

function detectcollision(stone,mango){
   mangoBodyPosition=mango.body.position
   stoneBodyPosition=stone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if(distance<=mango.r+stone.r){
          Matter.Body.setStatic(mango.body,false);
     }

}