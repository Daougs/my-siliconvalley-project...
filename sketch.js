var inv, steve, coin, bgimage1,bg,button1,bgend
var invimage, steveimage, coinimage, ground, trex,invisibleGround, cloudsGroup, obstaclesGroup
var mainscore= 0
var gamestate= 0
var score= 0, trex_running, groundImage, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6
var gameOverImg,restart, restartImg, gameOver,leatherarmour,buttonl,buttoncross,buttonbow,buttonneth,buttoniron,buttongold, lprice, crossprice, bowprice, nethprice, ironprice, goldprice
 function preload(){
   bgendimage= loadImage("images/bgend.png")
  invimage= loadImage("images/inventory.png")
  steveimage= loadImage("images/steve-removebg-preview.png")
  coinimage= loadImage("images/coin.png")
  bgimage1= loadImage("images/wood.jpg")
    trex_running =   loadAnimation("trex1.png","trex3.png","trex4.png");
    trex_collided = loadAnimation("trex_collided.png");
    
    groundImage = loadImage("ground2.png");
    
    cloudImage = loadImage("cloud.png");
    shopImage= loadImage ("images/101-.jpg")
    bowImage= loadImage("images/bow.png")
    crossbowImage= loadImage("images/crossbow.png")
    leatherArmourImage= loadImage("images/leather armour.png")
    ironSwordImage= loadImage("images/iron sword.png")
    netheriteSwordImage= loadImage("images/netherite sord.png")
    goldArmourImage= loadImage("images/gold armour.png")
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    obstacle5 = loadImage("obstacle5.png");
    obstacle6 = loadImage("obstacle6.png");
    
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
 }
function setup(){
  createCanvas(1200,600)
   bg= createSprite(200,200,width,height)
   bg.scale=2.5
   
   button1=createButton("NEXT PAGE->")
  
   shop=createSprite(200,200)
      shop.addImage(shopImage)
      shop.scale=1
      shop.visible=false
   button1.position(410,530)
   bg.addImage(bgimage1)
   inv= createSprite(715,150,100,100)
   inv.scale=1.5
   inv.addImage(invimage)
   steve= createSprite(100,380,50,200)
   steve.scale=1
   steve.addImage(steveimage)
  
   leatherarmour=createSprite(130,150)
      leatherarmour.addImage(leatherArmourImage)
      leatherarmour.scale=0.69

      leatherarmour.debug=true
      goldarmour=createSprite(530,150)
      goldarmour.addImage(goldArmourImage)
      goldarmour.scale=0.69

      ironsword=createSprite(930,150)
      ironsword.addImage(ironSwordImage)
      ironsword.scale=0.5

      netheriteSword=createSprite(130,420)
      netheriteSword.addImage(netheriteSwordImage)
      netheriteSword.scale=0.5

      crossbow=createSprite(530,420)
     crossbow.addImage(crossbowImage)
      crossbow.scale=0.69

      bow=createSprite(930,420)
      bow.addImage(bowImage)
      bow.scale=0.69

      leatherarmour.visible= false
      goldarmour.visible= false
      ironsword.visible= false
      netheriteSword.visible= false
      bow.visible= false
      crossbow.visible= false
  
  trex = createSprite(50,180,20,50);
  
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.5;
  trex.visible=false
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  //ground.velocityX = -(6 + 3*score/100);
  ground.visible=false
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  gameOver.visible= false
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  restart.visible= false
  gameOver.scale = 0.5;
  restart.scale = 0.5;


  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  
  
}
function draw(){

  background(255)
  let col = color(200,255,255)
  button1.style('font-size', '30px');
  button1.style('background-color', col);
  

  button1.mousePressed(function(){
   
    button1.hide()
    steve.destroy()
    inv.destroy()
    bg.destroy()
    
    gamestate=1
    
    
  })


    //background(255)
if(gamestate===1){

 score=score+Math.round(getFrameRate())
  trex.visible=true
ground.visible= true
ground.velocityX= -2
if (ground.x < 0){
  ground.x = ground.width/2;
}
if(keyDown("space") && trex.y>=150) {
  trex.velocityY = -12;
  console.log("jumped")
}

trex.velocityY = trex.velocityY + 0.5

trex.collide(invisibleGround);
spawnClouds();
spawnObstacles();
 if(obstaclesGroup.isTouching(trex)){
gamestate=2
 } 
  
  if(gamestate===2){
    button2=createButton("You can enter the shop!!!")
    button2.position(410,530)
    let col2 = color(200,255,255)
   button2.style('font-size', '30px');
   button2.style('background-color', col2);
  
    ground.velocityX=0
    obstaclesGroup.setVelocityXEach(0)
    cloudsGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    cloudsGroup.setLifetimeEach(-1)
    trex.changeAnimation("collided",trex_collided)

    button2.mousePressed(function(){
   
      gamestate=3      
      
      button2.hide()
      trex.destroy()
      ground.destroy()
      obstaclesGroup.destroyEach()
      cloudsGroup.destroyEach()
      
      coin= createSprite(30,30,25,25)
      coin.scale= 0.1
      coin.addImage(coinimage)



      shop.visible=true
      leatherarmour.visible= true
      ironsword.visible= true
      netheriteSword.visible= true
      bow.visible= true
      crossbow.visible= true
      goldarmour.visible= true
      if(gamestate===3){
       
        lprice=Math.round(random(1000,3000))
        buttonl=createButton(lprice)
        buttonl.position(110,200)

        goldprice= Math.round(random(3000,8000))
        buttongold=createButton(goldprice)
        buttongold.position(510,210)

        ironprice=Math.round(random(3000,5000))
        buttoniron=createButton(ironprice)
        buttoniron.position(910,220)

        nethprice= Math.round(random(4000,8000))
        buttonneth=createButton(nethprice)
        buttonneth.position(110,480)

        crossprice= Math.round(random(3000,6000))
        buttoncross=createButton(crossprice)
        buttoncross.position(510,470)

        bowprice= Math.round(random(4000,6000))
        buttonbow=createButton(bowprice)
        buttonbow.position(910,470)

      }
      buttonl.mousePressed(function(){
        score=score-lprice
        mainscore=mainscore+Math.round(random(1,3))
        buttonl.hide()
      })
      
      buttongold.mousePressed(function(){
        score=score-goldprice
        mainscore=mainscore+Math.round(random(3,8))
        buttongold.hide()
      })
      
      buttonneth.mousePressed(function(){
        score=score-nethprice
        mainscore=mainscore+Math.round(random(4,8))
        buttonneth.hide()
      })
      
      
      buttoniron.mousePressed(function(){
        score=score-ironprice
        mainscore=mainscore+Math.round(random(3,5))
        buttoniron.hide()
      })
      
      
      buttoncross.mousePressed(function(){
        score=score-crossprice
        mainscore=mainscore+Math.round(random(3,6))
        buttoncross.hide()
      })
      
      
      buttonbow.mousePressed(function(){
        score=score-bowprice
        mainscore=mainscore+Math.round(random(4,6))
        buttonbow.hide()
        
      })
      
      
       
        
      
    })
  
  
  
   
  }
  

}
if(score<0){
  shop.destroy()
  leatherarmour.destroy()
  goldarmour.destroy()
  ironsword.destroy()
  netheriteSword.destroy()
  crossbow.destroy()
  bow.destroy()
  buttonl.hide()
  buttongold.hide()
  buttoniron.hide()
  buttonneth.hide()
  buttoncross.hide()
  buttonbow.hide()
  fill("red")
  textSize(100)
  stroke("black")
  text("GAME OVER",400,400)
  
  }
  if(mainscore>25){
    shop.destroy()
   leatherarmour.destroy()
   goldarmour.destroy()
   ironsword.destroy()
   netheriteSword.destroy()
   crossbow.destroy()
   bow.destroy()
   buttonl.hide()
   buttongold.hide()
   buttoniron.hide()
   buttonneth.hide()
   buttoncross.hide()
   buttonbow.hide()
   fill("blue")
  textSize(40)
  stroke("black")
   text("VICTORY" ,400,400)
  }
  console.log(mainscore)
drawSprites()
fill("black")
textSize(16)

text("Score- "+score,60,30)

     }
 




 
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


function reset(){
  leatherarmour.destroy()
}