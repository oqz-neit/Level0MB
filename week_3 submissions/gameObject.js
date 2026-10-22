var player1 = new gameObject();

drawRect();

function player1(){
    this.x = 512;
    this.y = 800;
    this.width = 10;
    this.height = 30;
    this.color = "purple";

};

this.drawRect = function(){
    context.beginPath();
    context.rect(20, 20, 10, 10);
    context.fill();
    context.stroke();

};

drawRect.player1();