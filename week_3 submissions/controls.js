document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

var w = false;
var s = false;

var up = false;
var down = false

function press(e)
{
    console.log("Pressed" + e.key);

    if(e.keyCode == 87){
        w = true;
    }
    if(e.keyCode == 83){
        s = true;
    }
    
}

function release(e)
{
    console.log("Released" + e.key);

    if(e.keyCode == 87){
        w = false;
    }
    if(e.keyCode == 83){
        s = false;
    }
}