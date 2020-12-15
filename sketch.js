var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 10);
  wall = createSprite(1200, 200, thickness, height/2);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall.shapeColor="white";
  bullet.shapeColor="white";
}

function draw() {
  background(0);  

  bullet.velocityX = speed;

  if(wall.x - bullet.x < (wall.width + bullet.width)/2){

    bullet.velocityX = 0;

    var damage = 0.5 * speed * weight * speed/(thickness*thickness*thickness);

    if(damage > 10){

      wall.shapeColor="red";

    }

    if(damage < 10){

      wall.shapeColor="green";

    }
  }

  drawSprites();
}