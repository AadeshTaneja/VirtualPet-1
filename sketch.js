var dog,dog_img, happyDog, database, foodS, foodStock,
milk,milk_img,sleep,sleep_img,walk_img,walk,bath_img;

function preload()
{
  dog_img = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
  milk_img= loadImage("Milk.png");
  bath_img = loadImage("bath.png")
  sleep_img = loadImage("sleep.png")
  walk_img = loadImage("walk.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog = createSprite(250,280,20,20);
  dog.addImage("img",dog_img);
  dog.scale=0.3;
  milk = createSprite(130,440,20,20)
  milk.addImage("img2",milk_img)
  milk.scale=0.2
  bath=createSprite(220,280,20,20)
  bath.addImage("bfr",bath_img)
  bath.visible=false
  sleep=createSprite(220,260,20,20);
  sleep.addImage("tyhjt5r",sleep_img)
  sleep.scale=0.5
  sleep.visible=false
  walk=createSprite(220,260,20,20);
  walk.addImage("tyhjt5r",walk_img)
  walk.scale=0.5
  walk.visible=false

  
  
}


function draw() {  
  
  background (46, 139, 87) 
  
 
 
 
  
   if(keyWentDown(DOWN_ARROW)){
  
    dog.visible = false
    bath.visible=true
  
  }
  if(keyWentUp(DOWN_ARROW)){
    
      dog.visible = true
      bath.visible=false
    
    }
    if(keyWentDown(LEFT_ARROW)){
      
        dog.visible = false
        sleep.visible=true
      
      }
      if(keyWentUp(LEFT_ARROW)){
        
          dog.visible = true
          sleep.visible=false
        
        }
        if(keyWentDown(RIGHT_ARROW)){
          
            dog.visible = false
            walk.visible=true
          
          }
          if(keyWentUp(RIGHT_ARROW)){
            
              dog.visible = true
              walk.visible=false
            
            }
  if(keyWentDown(UP_ARROW)){
    
    writeStock(foodS);
     dog.addImage("img",happyDog);
     milk.x=160
     milk.y=300
     milk.scale=0.1
    
   }
  if(keyWentUp(UP_ARROW)){
    dog.addImage("img",dog_img)
    milk.x=130
    milk.y=440
    milk.scale=0.2
  
  }

   

  drawSprites();
  
  textSize(22);
  stroke("yellow")
  fill("yellow");
  text("Wanna Feed Milk to Tommy.Press UP_ARROW!!",10,50);
  text("Press Down Arrow to bath Tommy",100,70);
  text("Press Right Arrow to walk tommy",100,90);
  text("Press Left Arrow to sleep tommy",100,110);
  text("Note: Only Press The keys after 'Available Food:'",10,140);
  text("is visible.Otherwise there will be an error",10,160);
  
 if(foodS!==undefined) text("Available food: "+foodS,150,410);

  
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x===0){
    x=20;
  }
    else{
      x=x-1;
    }
  database.ref('/').update({
    Food:x
  })

}


