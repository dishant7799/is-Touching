var movingrect,fixedrect;





function setup() {
  createCanvas(400,400);
  movingrect = createSprite(100, 200, 50, 50);
  movingrect.shapeColor="red";
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green";
}

function draw() {
  background("blue"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
if(movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
  fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
  movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
  fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2){
  movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
}
else{
  movingrect.shapeColor="red";
  fixedrect.shapeColor="green";
}



  drawSprites();
}