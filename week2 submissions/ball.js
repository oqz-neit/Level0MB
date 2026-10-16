function Ball(){
this.x = 0;
this.y = 0;
this.width = 10; 
this.height =20;
this.color ="blue";
this.force = 5;
this.vx = 5;
this.vy = 5;
this.radius = 10;

this.draw = function(){
    context.beginPath();
    context.arc(this.x,this.y,this.radius,0,360*Math.PI/180,true);
    context.closePath();
    context.fill();
}
}



