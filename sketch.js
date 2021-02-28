var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  thickness=random(22,83);
  speed=Math.round(random(22,32));
  weight=random(22,52);

  
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255);
  bullet.x=bullet.x+speed
  if(hasCollided(bullet,wall))
  {
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  else
    if(damage<10)
    {
      wall.shapeColor=color(230,230,0);
    }   
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=lbullet.x+lbullet.width/2;
    wallLeftEdge=lwall.x-lwall.width/2;
   if (bulletRightEdge>=wallLeftEdge)
   {
    bullet.velocity
     return true
   }
   return false;
  }