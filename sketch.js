const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy , girl , girl2 , boy2 ;
var engine , world ;
var snowSize , snowAr = [];

function preload() {
  bgImg = loadImage("images/snow1.jpg")
  boyImg = loadImage("images/boy.png")
  girlImg = loadImage("images/girl.png")
  girlAni = loadAnimation("images/girl/g1.png","images/girl/g2.png","images/girl/g3.png","images/girl/g4.png","images/girl/g5.png","images/girl/g6.png")
  boyAni = loadAnimation("images/boy/b1.png","images/boy/b2.png","images/boy/b3.png","images/boy/b4.png","images/boy/b5.png","images/boy/b6.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
     
  boy = createSprite(600,220,10,10);
  boy.addImage(boyImg);
  boy.scale = 0.15;
  World.add(world,boy)

  girl = createSprite(450,220,10,10);
  girl.addImage(girlImg);
  girl.scale = 0.15;
  World.add(world,girl)

  girl2 = createSprite(0,250,10,10);
  girl2.addAnimation("woman",girlAni);
  girl2.scale = 0.6;
  World.add(world,girl2)

  boy2 = createSprite(800,330,10,10);
  boy2.addAnimation("kid",boyAni);
  boy2.scale = 0.7;
  World.add(world,boy2)

  //snowflake = new Snow(random(0,800),0,snowSize,snowSize);

}

function draw() {
  if(bgImg){
    background(bgImg);  
  }
  Engine.update(engine);

  girl2.velocityX = 1.5 ;
  if(girl2.x > 800){
    girl2.x = 0;
  }

  boy2.velocityX = -2;
  if(boy2.x < 0){
    boy2.x = 800;
  }
 
  snowSize = random(10,40);
  if(frameCount%20 === 0) {
    snowAr.push(new Snow(random(0,800),0,snowSize,snowSize));
  }

  for (var s = 0; s < snowAr.length; s++){
    snowAr[s].display();
  }
  
  drawSprites();
}