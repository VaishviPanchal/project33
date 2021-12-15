class Snow{
    constructor(x,y,width,height){
        var options = {
            restitution:1,
            friction:1.0,
            density:3.0,
            isStatic:false,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("images/snow6.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        noStroke();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}