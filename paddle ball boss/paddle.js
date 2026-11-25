function GameObject() {
    this.x = 375;
    this.y = 405;
    this.width = 250;
    this.height = 40;
    this.color = "cyan";
    this.vx = 0;
    this.vy = 0;
    
    this.drawRect = function()
    {
    context.save();
        context.fillStyle = this.color;
        context.translate(this.x,this.y);
        context.fillRect(0, 0, this.width, this.height);
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.strokeRect(0, 0, this.width, this.height);
    context.restore();
    }
    this.drawCircle = function()
    {
    context.save();
        context.fillStyle = this.color;
        context.beginPath();
        context.translate(this.x,this.y);
        context.arc(0,0, this.width, 0, 360 * Math.PI/180)
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
        return this.x;
    }
    this.right = function()
    {
        return this.x + this.width;
    }
    this.top = function()
    {
        return this.y;

    }
    this.bottom = function()
    {
        return this.y + this.height;
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
        else
        {
            return false;
        }
    }
}