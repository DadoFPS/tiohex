var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obestaculo1,obestaculo2,obestaculo3,obestaculo4,obestaculo5,obestaculo6;

var obstaculo;

var pontos = 0;

var groupobs;


var groupnvu;


var newImage;


var estadodejogo = "play";

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obestaculo1 = loadImage ("obstacle1.png");
  obestaculo2 = loadImage ("obstacle2.png");
  obestaculo3 = loadImage ("obstacle3.png");
  obestaculo4 = loadImage ("obstacle4.png");
  obestaculo5 = loadImage ("obstacle5.png");
  obestaculo6 = loadImage ("obstacle6.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  groupobs = new Group ();

  groupnvu = new Group ();


  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background("white");
  
  pontos = pontos + Math.round (frameCount /60)

  text ("pontos:" + pontos,500,50);
  
  
  trex.collide(invisibleGround);
 
  

  
 
  
  
  
  


  if (estadodejogo === "play") {

    spawnClouds();
    spawnObs ();

      if (trex.isTouching (groupobs)) {

        estadodejogo = "derrota";


      }
    
   
    
    if(keyDown("up") && trex.y>=161) {
      trex.velocityY = -10;
    }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    
    trex.velocityY = trex.velocityY + 0.8
  }else if (estadodejogo === "derrota") {

    ground.velocityX = 0;

    trex.velocityY = 0;


    groupobs.setVelocityXEach (0);


    groupnvu.setVelocityXEach (0);




  }
  
  drawSprites();
}

function spawnClouds() {
  
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
   
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    cloud.lifetime = 220;

    groupnvu.add (cloud);

    }
}


function spawnObs () {

if (frameCount % 100 === 0) {

  obstaculo = createSprite (605,165,10,40);

  switch (Math.round (random (1,6))) {

    case 1:
      obstaculo.addImage (obestaculo1);
      break

    case 2:
      obstaculo.addImage (obestaculo2);
      break

    case 3:
      obstaculo.addImage (obestaculo3);
      break

    case 4:
      obstaculo.addImage (obestaculo4);
      break

    case 5:
      obstaculo.addImage (obestaculo5);
      break

    case 6:
      obstaculo.addImage (obestaculo6);
      break

      


  }

  obstaculo.velocityX= -4;
  obstaculo.scale = 0.4;
  obstaculo.lifetime = 220;

  groupobs.add (obstaculo);

}




}

