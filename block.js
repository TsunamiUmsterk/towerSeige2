class Block{
    constructor(x, y, width, height) {
        var options = {     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png");
        this.visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed <= 5 && this.visibility === 255) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        } else {
          push();
          this.visibility = this.visibility - 5;
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          tint(255, this.visibility);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
      }
}
