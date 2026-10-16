var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var ball = new Ball();
timer = setInterval(animate, 1000/60);

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
}