var dog,dog1,happyDog,database,foodS,foodStock;

function preload()
{
 dog1 = loadImage("images/dogImg.png");
 happyDog = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();

	createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dog1);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value",readOn);
}


function draw() {  
  background(255)

  if(keyWentDown(UP_ARROW)){
    writeOn(foodS);
    dog.addImage(happyDog);
  }

  textSize(20);
  fill("red");
  stroke("black");
  strokeWeight(3)
  text("Note : Press UpArrow Key to feed the dog",80,30);

  drawSprites();

   text("Food Left: ",200,120);
   text(foodS,240,150);
  }

function readOn(data){
  foodS = data.val();
}

function writeOn(x){

  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

