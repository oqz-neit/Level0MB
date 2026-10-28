function GameObject()
{   
    this.x = 10;
    this.y = 330;
    this.width = 30;
    this.height = 150;
    this.color = "purple"; 

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



}