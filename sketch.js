var fixRec,movRec;
var ob1,ob2,ob3,ob4,ob5;
function setup() {

  createCanvas(800,400);
 fixRec= createSprite(400, 200, 50, 50);
 movRec= createSprite(600, 200, 50, 50);
 ob1=createSprite(100,100,50,50);
 ob1.shapeColor="green"
 ob2=createSprite(200,100,50,50);
 ob2.shapeColor="green"
 ob3=createSprite(300,100,50,50);
 ob3.shapeColor="green"
 ob4=createSprite(400,100,50,50);
 ob4.shapeColor="green"
 ob5=createSprite(500,100,50,50);
 ob5.shapeColor="green"

movRec.shapeColor="green";
fixRec.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movRec.x=World.mouseX;
  movRec.y=World.mouseY;
 
if(isTouching(movRec,ob1)){

movRec.shapeColor="red";
ob1.shapeColor="red";
bounce(ob1,movRec)

}else
{
movRec.shapeColor="green";
fixRec.shapeColor="green";


}


 
  drawSprites();
}
