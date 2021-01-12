
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  ground=createSprite(300,390,900,20);
  ground.velocityX=-8;
  ground.x=ground.width/2;
  
  monkey=createSprite(100,350,30,30),
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
 background("black");
  
   if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  spawnbanana();
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
 drawSprites(); 
  spawnobstacle();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,400,50);
  
  stroke("red");
  textSize(20);
  fill("red");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivel Time: "+ survivalTime,100,50);
  
}
function spawnbanana() {
 
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    
    
   
    FoodGroup.add(banana);
  }
}
function spawnobstacle() {
 
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,370,40,10);
    obstacle.X = Math.round(random(300,320));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    obstacleGroup.add(obstacle);
  }
}






