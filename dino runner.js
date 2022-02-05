
var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(60,155,10,10);
  trex.scale = 0.75;
  trex.addAnimation("running",trex_running);
  ground = createSprite(300,200,600,25);
}

function draw(){
  background("white");
  
  if (keyWentDown("space")){
  trex.velocityY = -15
  }
  trex.velocityY=trex.velocityY+1;
 trex.collide(ground);
  drawSprites();
}