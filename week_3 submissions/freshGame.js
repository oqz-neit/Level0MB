canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

var player1 = new GameObject();

var interval = 1000/60;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    if(w)
    {   
        console.log("moving up");
        player1.y -= 2;
    }
    if(s)
        {
            console.log("moving down");
        player1.y += 2;
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
    

    player1.drawRect();
}