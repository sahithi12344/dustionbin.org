
 class Paper {
constructor(x,y,width,height,options){
var options={
    isStatic:false,
    restitution:0.9,
    friction:0,
    density:0.3
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width=width
this.height=height
this.image = loadImage("paper.png");
World.add(world, this.body);
}
display() {
    var Paperpos = this.body.position
    push();
    translate(Paperpos.x, Paperpos.y);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
}
}