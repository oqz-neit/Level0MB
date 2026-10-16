var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var ball = new Ball();
timer = setInterval(animate, 1000/60);

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    //image colliions mechanic
    //call interval within if statements and then the image collisions and frame time the image is applied on screen. 
    
if(ball.x >= canvas.width){
    ball.x -= 0;
    ball.vx = -ball.vx;
    
}
if(ball.x <= 0){
    ball.x = 0;
    ball.vx = -ball.vx;
    
}
if(ball.y >= canvas.height){
    ball.y -= 0;
    ball.vy = -ball.vy;
    
}
if(ball.y <= 0){
    ball.y = 0;
    ball.vy = -ball.vy;
    
}
ball.draw();

}
