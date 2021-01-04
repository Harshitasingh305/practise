function isTouching(rec1,rec2){

 if(rec1.x-rec2.x <rec2.width/2+rec1.width/2&&
    rec2.x-rec1.x <rec2.width/2+rec1.width/2&&
     rec1.y-rec2.y <rec2.height/2+rec1.height/2&&
    rec2.y-rec1.y <rec2.height/2+rec1.height/2){
    

    return true;

  }else{

    return false;
  }









}
function bounce(rec1,rec2){
if(rec1.x-rec2.x <rec2.width/2+rec1.width/2&&
    rec2.x-rec1.x <rec2.width/2+rec1.width/2){

rec1.velocityX=-1;
rec2.velocityX=1;





}
if(
 rec1.y-rec2.y <rec2.height/2+rec1.height/2&&
    rec2.y-rec1.y <rec2.height/2+rec1.height/2){
rec1.velocityY=-1;
rec2.velocityY=1;


}
}