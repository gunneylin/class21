movingRec,fixedRec;
function setup() {

  createCanvas(1200,800);
  fixedRec=createSprite(400, 200, 50, 50);
  fixedRec.shapeColor="purple";
  movingRec=createSprite(200,100,40,80);
  movingRec.shapeColor="purple";
  box1=createSprite(200, 200, 50, 50);
  box1.shapeColor="purple";
  box1.velocityY=3;
  box2=createSprite(200, 600, 50, 50);
  box2.shapeColor="purple";
  box2.velocityY=-3;
}

function draw() {
  background("black"); 
  movingRec.x=mouseX;
  movingRec.y=mouseY; 
  isTouching(fixedRec,movingRec);
  bounce(box1,box2);
  drawSprites();
}


