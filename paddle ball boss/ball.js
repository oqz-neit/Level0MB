function Ball(){
this.x = 500;
this.y = 300;
this.radius = 40;
this.color = "magenta";
this.vx = 0;
this.vy = 5;
this.gravity = 1;
this.force = 5;


    this.draw = function(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,360*Math.PI/180,true);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.stroke();
    }
    this.move = function()
    {
        this.vy += this.gravity;
        this.vx *= 0.995;
        this.x += this.vx; 
        this.y += this.vy; 
    }
    this.left = function()
    {
        return this.x - this.radius;

    }
    this.right = function()
    {
        return this.x + this.radius;
    }
    this.top = function()
    {
        return this.y - this.radius;
    }
    this.bottom = function()
    {
        return this.y + this.radius;
    }
   
    this.hitTestObject = function(obj2)
    {
        if(this.left() < obj2.right()&&
           this.right() > obj2.left()&&
           this.top() < obj2.bottom()&&
            this.bottom() > obj2.top())
            {
                return true;
            }
            return false;
    } 
}