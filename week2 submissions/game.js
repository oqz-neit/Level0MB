var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var image = document.getElementById("myImage");
var ball = new Ball();
timer = setInterval(animate, 1000/60);

var isFlashing = false;
var flashTimeout = null;

var  flashImage = new Image();
flashImage.src = "IMG_1378.jpg";

function triggerFlash(){
   isFlashing = true;
  clearTimeout(flashTimeout);
  flashTimeout = setTimeout(function(){
      isFlashing = false;
  }, 100); // Flash for 1 second

}

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.x += ball.vx;
    ball.y += ball.vy;
    //image colliions mechanic
    //call interval within if statements and then the image collisions and frame time the image is applied on screen. 
    
if(ball.x >= canvas.width){
    ball.x -= 0;
    ball.vx = -ball.vx;
    triggerFlash();
    
}
if(ball.x <= 0){
    ball.x = 0;
    ball.vx = -ball.vx;
    triggerFlash();
}
if(ball.y >= canvas.height){
    ball.y -= 0;
    ball.vy = -ball.vy;
    triggerFlash();
    
}
if(ball.y <= 0){
    ball.y = 0;
    ball.vy = -ball.vy;
    triggerFlash();
    
}
if(isFlashing){
    context.drawImage(flashImage, 0, 0, canvas.width, canvas.height);
}
ball.draw();



}
