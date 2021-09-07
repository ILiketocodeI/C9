var one 
function setup() {
  createCanvas(400,400);
  one = createSprite (130,247,30,30)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    one.position.x+=5
  }
  if (keyIsDown(UP_ARROW)){
    one.position.y-=5
  }
  if (keyIsDown(DOWN_ARROW)){
    one.position.y+=5
  }
  if (keyIsDown(LEFT_ARROW)){
    one.position.x-=5
  }
drawSprites();
}




