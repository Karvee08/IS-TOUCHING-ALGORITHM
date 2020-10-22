

var f1,m1;
function setup() {
  createCanvas(800,400);
  f1=createSprite(400,200,50,30);
  f1.shapeColor="pink";
  f1.debug=true;
  m1=createSprite(200, 200, 50, 50);
  m1.shapeColor="pink";
  m1.debug=true;

}

function draw() {
  background("navy");  
  m1.x=World.mouseX;
  m1.y=World.mouseY;
  if(f1.x-m1.x<f1.width/2+m1.width/2&&
    m1.x-f1.x<f1.width/2+m1.width/2&&
    m1.y-f1.y<m1.height/2+f1.height/2&&
    f1.y-m1.y<f1.height/2+m1.height/2)

  {
    f1.shapeColor="yellow";
    m1.shapeColor="yellow";
  }
  else{
    f1.shapeColor="pink";
    m1.shapeColor="pink";
  }
  drawSprites();
}