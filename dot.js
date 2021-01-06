class Dot {
    constructor(x, y, r) {


        var options = {
          
            isStatic: true

        }

        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
        
    }
    display() {
        push();
        fill("red")
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("blue")
        strokeWeight(3);
        
        
        
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}