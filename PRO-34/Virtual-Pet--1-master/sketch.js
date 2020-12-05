//Create variables here
var dog , happyDog , food , foodStock
var database
function preload()
{
  //load images here
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250);
 

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87)
  //add styles here
 if (keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }

 drawSprites();
fill(white); 
text("Note:Press up_arrow key to feed Drago",50,100);
textSize(30);
stoke(4);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


