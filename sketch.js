var quadrado;




function setup() {
  createCanvas(400,400);
  quadrado = createSprite (200, 200,50,50);
}

function draw() 
{
  background(30);
  movimentar ();
  
  
  drawSprites ();
}

function movimentar () {
  
  
  if (keyDown("left")) {
    
    quadrado.x -=5;
    
    
    
  }if (keyDown("right")){
    
    
    quadrado.x +=5;
    
  }if (keyDown ("up")){
    
    quadrado.y -=5;



  }if (keyDown("down")){


    quadrado.y +=5;

  }
 
}


