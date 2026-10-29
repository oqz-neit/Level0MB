function GameObject()
{   
    this.x = -15;
    this.y = 330;
    this.width = 30;
    this.height = 150;
    this.color = "purple"; 

    this.vx = 0;
    this.vy = 0;

     this.drawRect = function()
    {
    context.save();
        context.fillStyle = this.color;
        context.translate(this.x,this.y);
        context.fillRect(0, 0, this.width, this.height);      
    context.restore();
    }
    this.drawCircle = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.beginPath();
            context.translate(this.x,this.y);
            context.arc(0, 0, this.width, 0, 360 *Math.PI/180, true);
            context.closePath();
            context.fill();
        context.restore();
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
    //bounding box
    this.hitTestObject = function(obj)
    {
        if(this.left() < obj.right()&&
           this.right() > obj.left()&&
           this.top() < obj.bottom()&&
            this.bottom() > obj.top())
            {
                return true;
            }
            return false;
    } 

}