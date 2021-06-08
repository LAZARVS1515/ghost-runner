var ghoststand,ghostjump;
var doorImg
var towerImg
var climberImg
var spooky
var edges

function preload() {
ghoststand = loadImage("ghost-standing.png");
ghostjump = loadImage("ghost-jumping.png");
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
spooky = loadSound("spooky.wav");
}
function setup() {
  createCanvas(900, 900);
tower = createSprite(450,450);
tower.addImage("wad",towerImg);
tower.velocityY = 1;

ghost = createSprite(350,500,20,20);
ghost.addImage("dwas",ghoststand);
ghost.scale = 0.5  

//spooky.loop();

}

function draw() {
  background(200);
  


if(keyDown("a")){
  ghost.x = ghost.x -3;
}
if(keyDown("d")){
  ghost.x = ghost.x +3;
} 
if(keyDown("w")){
  ghost.y = ghost.y -3;
}
if(keyDown("s")){
  ghost.y = ghost.y +3;
}

if(keyDown("space")){
  ghost.velocityY = -5;
}
ghost.velocityY = ghost.velocityY+0.5;
//loop for tower
if (tower.x > 900){
  tower.x = 450;
}
spawnDoors();
drawSprites();
}
 function spawnDoors()
 {
 if(frameCount%200===0){
  door = createSprite(width-800,height-500);
  door.addImage("jshas",doorImg);
  door.scale = 0.5;
  door.velocityY = 1;
  door.lifetime = 300;

  climber = createSprite(width-800,height-490);
  climber.addImage("dahgw",climberImg);
  climber.scale = 0.5;
  climber.velocityY = 1;
  climber.lifetime = 300;
  door.x = Math.round(random(200,700));
}  
 }
 