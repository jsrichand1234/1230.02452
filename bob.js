class Bob {
    constructor(x, y, r) {


        var options = {
            restitution: 1,
            friction: 0.5,
            density: 1.2,
            isStatic: false

        }

        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
        
    }
    display() {
        push();
        fill("black")
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("lime")
        strokeWeight(3);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}