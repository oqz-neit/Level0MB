canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

var player1 = new GameObject();

var interval = 1000/60;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);


    player1.drawRect();
}