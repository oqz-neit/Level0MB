canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
//paddle & ball
var player1 = new GameObject();
var ball = new Ball();

//paddle height & pos
var sixth = player1.width/6;
//score 
var player1Score = 0;

var interval = 1000/60;

timer = setInterval(animate, interval);

function animate()
{
context.clearRect(0,0, canvas.width, canvas.height);



ball.move();
//player 1 controls & acceleration
if(a)
    {
        console.log("moving left");
        player1.vx -= 2;
    }
    if(d)
        {
            console.log("moving right");
            player1.vx += 2;
        }
        if(!a && !d) 
            {
                player1.vx *= 0.85;
            }
                //smoother paddle moving
        if(player1.vx > 12) {player1.vx = 12;}
        if(player1.vy < -12) {player1.vx = -12;}

            player1.move();
 //player   BORDERS
if(player1.x < 0)
    {
        player1.x = 0;
    }
    if(player1.x + player1.width > canvas.width)
    {
        player1.x = canvas.width - player1.width;
    }

    //bottom border 
    if(ball.bottom() >= canvas.height)
        {
            ball.y = canvas.height - ball.radius;;
            ball.vy = -ball.vy * 0.67; //lose 33% movement each bounce
            ball.vx *= 0.9; //floor friction slows side motion
            player1Score = 0; //reset score

            if(Math.abs(ball.vy) < 3)//stop the ball once it slows
                {
                    ball.vy = 0;
                }
        }
        //top
        if(ball.top() <= 0)
        {
            ball.y = ball.radius;
            ball.vy = -ball.vy;
        }
        //left 
        if(ball.left() <= 0)
            {
                ball.x = ball.radius;
                ball.vx = -ball.vx;
            }
        //right 
        if(ball.right() >= canvas.width)
            {
                ball.x = canvas.width - ball.radius;
                ball.vx = -ball.vx;
            }
     if(ball.hitTestObject(player1) && ball.vy > 0)
    {
        //change color on contact
        player1.color = "red";
        ball.color = "green";

        var collPos = ball.x - player1.x;

        ball.y = player1.top() - ball.radius;

        if(collPos < sixth)
        {   //outer left
            ball.vx = -ball.force * 5;
            ball.vy = -35;
       
        } else if(collPos < sixth * 2)
        {    //INNER 1/6th left
            ball.vx = -ball.force;   
            ball.vy = -35;
        
        } else if(collPos < sixth * 4)
            {
                //center
                ball.vx = 0;
                ball.vy = -35;
            }else if(collPos < sixth * 5)
                {
                    //inner 1/6 to the right paddle 
                    ball.vx = ball.force;
                    ball.vy = -35;
                }else
                    {
                        //outer 1/6 to the right paddle 
                        ball.vx = ball.force * 5;
                        ball.vy = -35;
                    }

                    player1Score += 1;

    }
    else
    {
        player1.color = "cyan";
        ball.color = "magenta";
    }

    //connecting line
context.beginPath();
context.moveTo(ball.x, ball.y);
context.lineTo(player1.x + player1.width/2, player1.y);
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();


ball.draw();
player1.drawRect();

context.fillText("Player 1 Score: " + player1Score, 100, 100);
}



