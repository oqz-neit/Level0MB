document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

var upArrow = false;
var downArrow = false;

var up = false;
var down = false;

function press(e)
{
    console.log("Pressed" + e.key);

    if(e.keyCode == 38){
        upArrow = true;
    }
    if(e.keyCode == 40){
         downArrow = true;
    }
}

function release(e)
{
    console.log("Released" + e.key);

    if(e.keyCode == 38)
    {
            upArrow = false;
    }
    if(e.keyCode == 40)
    {
            downArrow = false;
    }

}
