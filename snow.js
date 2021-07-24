class Snow{
    constructor(x,y){
        var options = {
            'restitution':0.2,
            'friction':0.05,
            'density':0.1}
            this.body = Bodies.circle(x, y,30,options)
            
            this.image = loadImage("snow4.webp");
            World.add(world, this.body);

    }


 display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,30,30)
    pop();
 }














}