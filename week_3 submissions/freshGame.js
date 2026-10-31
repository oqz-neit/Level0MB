canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

var player1 = new GameObject();
var ball = new Ball();

var interval = 1000/60;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    //PLAYER 1 
    if(w)
    {   
        console.log("moving up");
        player1.y -= 4;
    }
    if(s)
        {
            console.log("moving down");
        player1.y += 4;
        }
    
        //borders
    if(player1.y < 0)
            {
                player1.y = 0;
            }
    if(player1.y + player1.height > canvas.height)
        {
            player1.y = canvas.height - player1.height;
        }       
    

   

    //ball
     ball.x += ball.vx;
    ball.y += ball.vy;
    
    
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


    //collision & bounding box,
    if(ball.hitTestObject(player1))
    {
        //change color on contact
        player1.color = "red";
        ball.color = "green";

        //bounce send the ball to the right
        ball.vx = Math.abs(ball.vx);
        ball.x = player1.right() + ball.radius;
        
    }else{
        player1.color = "purple";
        ball.color = "blue";
    }




     player1.drawRect();
     ball.draw();
}