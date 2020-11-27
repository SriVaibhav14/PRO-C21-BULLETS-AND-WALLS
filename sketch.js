var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1300,400);

  bullet = createSprite(50, 200, 50, 5);
  thickness=random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("white");
  //wall.debug=true;
  wall.setCollider("rectangle",30,0);
  
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background("black");
  
  if(hasCollided(bullet,wall)){
    if(wall.x-bullet.x < wall.width/2+bullet.width/2){
      bullet.velocityX=0;
      var damage=(0.5*weight*speed*speed) / (thickness*thickness*thickness);
        if(damage>10){
          wall.shapeColor=color("red");
        }
        if(damage<=10){
          wall.shapeColor=color("lightgreen");
        }
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  
  var bulletRightEdge = bullet.x + bullet.width;
  var wallLeftEdge = wall.x - wall.width;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}