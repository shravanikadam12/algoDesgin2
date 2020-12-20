
var rect1,rect2
function setup() {
  createCanvas(800,400);
  rect1= createSprite(400, 200, 50, 50);
  rect2=createSprite(200,200,50,50);
    rect1.shapeColor="green"
    rect2.shapeColor="green"
    rect1.debug=true
  rect2.debug= true 
}

function draw() {
  background(255,255,255);  
  rect2.x=mouseX
  rect2.y=mouseY
if(isTouching(rect1,rect2)){
      rect1.shapeColor="red"
      rect2.shapeColor="red"
    }else{
      rect1.shapeColor="green"
      rect2.shapeColor="green"
    }
  drawSprites();
} 
