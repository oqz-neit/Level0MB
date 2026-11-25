document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

var a = false;
var d = false;

var left = false;
var right = false;


function press(e)
{
    console.log("Pressed" + e.key);

    if(e.keyCode == 65){
        a = true;
    }
    if(e.keyCode == 68){
        d = true;
    }
}
function release(e)
{
    console.log("Released" + e.key);
    
    if(e.keyCode == 65){
        a = false;
    }
    if(e.keyCode == 68){
        d = false;
    }
}
