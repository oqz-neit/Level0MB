canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
//paddle and pong intializtion   
var player1 = new GameObject();
var player2 = new GameObjectTwo();
var ball = new Ball();
//paddle height & pos
var third = player1.height/3;
var third2 = player2.height/3;

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
     ball.draw();
     //lose condition 
   if(ball.right() < 0 || ball.left() > canvas.width)
   {
    resetBall();
   }
}
 function resetBall()
   {
    //sends ball to the paddle
    
   ball.x = canvas.width / 2;
   ball.y = canvas.height / 2;
   ball.vx = -ball.force;
   ball.vy = 0;
   
   }