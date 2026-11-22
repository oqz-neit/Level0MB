canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
var img = new Image();
img.src = "flair-ball.png";
//paddle and pong intializtion   
var player1 = new GameObject();
var player2 = new GameObjectTwo();
var ball = new Ball();
//paddle height & pos
var third = player1.height/3;
var third2 = player2.height/3;
//score
var player1Score = 0;
var player2Score = 0;

var interval = 1000/60;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    //net
    context.save();
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(canvas.width/2, canvas.height/2+400);
    context.lineTo(canvas.width/2, canvas.height/2-400);
    context.closePath();
    context.lineWidth = 5;
    context.stroke();
    context.restore();
    
    
    
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

        //player2
    if(upArrow)
    {
        console.log("arrowUp")
        player2.y -= 4;
    }
    if(downArrow)
    {
        console.log("arrowDown")
        player2.y += 4;
    }    
        //borders
        if(player2.y < 0)
            {
                player2.y = 0;
            }
            if(player2.y + player2.height > canvas.height)
                {
                    player2.y = canvas.height - player2.height;
                }
    

   

    //ball movement
     ball.x += ball.vx;
    ball.y += ball.vy;
    
    

    //bottom
    if(ball.y >= canvas.height){
    ball.y -= 0;
    ball.vy = -ball.vy;
    
    
    }
    //top
    if(ball.y <= 0){
    ball.y = 0;
    ball.vy = -ball.vy;
    
    
    }


    //collision & bounding box (player1 and bal)
    if(ball.hitTestObject(player1))
    {
        //change color on contact
        player1.color = "red";
        ball.color = "green";

        var collPos = ball.y - player1.y;

        if(collPos < third)
        {   //top third paddle collison 
            ball.vx =  ball.force;
            ball.vy = -ball.force;
       
        } else if(collPos > third * 2)
        {    //bottom third paddle collision 
            ball.vx = ball.force;
            ball.vy = ball.force;
        
        } else 
            { //middle third paddle collision 
                ball.vx = ball.force;
                ball.vy = 0;
            }



        //bounce send the ball to the right
        ball.x = player1.right() + ball.radius;
    
        
    }else{
        player1.color = "purple";
        ball.color = "blue";
    }

    //collision & bounding box (player2 and ball,
    if(ball.hitTestObject(player2))
        {
            //color on contact
            player2.color = "red";
            ball.color = "green";

            var collPos = ball.y + player2.y;

            if(collPos > third2)
                {
                    //top third paddle collision
                    ball.vx = -ball.force;
                    ball.vy = ball.force;
                
                }else if(collPos < third2 * 2)
                    {
                        //bottom third paddle collision
                        ball.vx = ball.force;
                        ball.vy = ball.force;

                    }else
                        {
                            //middle third paddle collision
                            ball.vx = -ball.force;
                            ball.vy = 0;
                        }
                    
                        //bounce send the ball to the left
                        ball.x = player2.left() - ball.radius;
                
        
            }else{ 
                player2.color = "blue";
                ball.color = "blue";
        }
    
     player2.drawRectTwo();
     player1.drawRect();
     context.drawImage(img, ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
     //lose condition 
   if(ball.right() < 0)
   {
    resetBall();
    player2Score += 1;
    console.log("Player 2 Score: " + player2Score);
   }
    if(ball.left() > canvas.width)
     {
        resetBall();
        player1Score += 1;
        console.log("Player 1 Score: " + player1Score);
     }
     context.fillText("Player 1 Score: " + player1Score, 100, 100);
     context.fillText("Player 2 Score: " + player2Score, 800, 100);
}
 function resetBall()
   {
    //sends ball to the paddle
    
   ball.x = canvas.width / 2;
   ball.y = canvas.height / 2;
   ball.vx = -ball.force;
   ball.vy = 0;
   
   }