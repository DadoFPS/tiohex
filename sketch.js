var hex;
var animation1;
var solo;
var animation2;

function preload () {

  animation1 = loadAnimation ("trex1.png","trex3.png","trex4.png");
  animation2 = loadImage ("ground1.png");
  
  
  }

function setup(){
  createCanvas(600,200);
  hex = createSprite (50,110,20,20);
  hex.addAnimation ("correndo",animation1);
  hex.scale = 0.5;
  solo = createSprite (200,180,400,20);
  solo.addImage ("chao",animation2);
}

function draw(){
  background("white");
  drawSprites();
  pular ();
  hex.collide (solo);
}
function pular () {

  if (keyDown ("up")) {
    hex.velocityY = -10;

  }
  	hex.velocityY += 0.8;


}
