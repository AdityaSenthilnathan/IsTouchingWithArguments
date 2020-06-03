var fixedRectangle 
  var movingRectangle 
  var rec3
function setup() {
  createCanvas(800,400);
   fixedRectangle = createSprite(400, 200, 50, 50);
   fixedRectangle.shapeColor = "blue"

   movingRectangle = createSprite(400, 200, 50, 50);
   movingRectangle.shapeColor = "blue"

   rec3 = createSprite(300, 100, 50, 50);
   rec3.shapeColor = "blue"
}

function draw() { 
  background(255,255,255);  
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  
  if(collideDetect(movingRectangle, fixedRectangle)){
    movingRectangle.shapeColor = "red";
    fixedRectangle.shapeColor = "red";
  }
  else if (collideDetect(movingRectangle, rec3)){
    movingRectangle.shapeColor = "red";
    rec3.shapeColor = "red";

  }
  else {
    movingRectangle.shapeColor = "blue";
    fixedRectangle.shapeColor = "blue";
    rec3.shapeColor = "blue";

  }
  drawSprites();
}
