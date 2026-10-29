function Ball(){
this.x = 512;
this.y = 400;
this.width = 10; 
this.height= 20;
this.color = "blue";
this.force = 5;
this.vx = 5;
this.vy = 5;
this.radius = 20;

this.draw = function(){
    context.beginPath();
    context.arc(this.x,this.y,this.radius,0,360*Math.PI/180,true);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
}

     this.move = function()
    {
        this.x += this.vx; 
        this.y += this.vy; 
    }
    this.left = function()
    {
        return this.x - this.width/2;

    }
    this.right = function()
    {
        return this.y - this.height/2;
    }
    this.top = function()
    {
        return this.y - this.height/2
    }
    this.bottom = function()
    {
        return this.y + this.height/2;
    }
   
    this.hitTestObject = function(obj2)
    {
        if(this.left() > obj2.right()&&
           this.right() < obj2.left()&&
           this.top() > obj2.bottom()&&
            this.bottom() < obj2.top())
            {
                return true;
            }
            return false;
    } 
}



