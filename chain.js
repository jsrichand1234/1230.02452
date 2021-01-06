class pendulum {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            //stiffness: 0.04,
            length: 300,
            pointB: {x:this.offsetX, y:this.offsetY}
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        // console.log(this.chain)
    }
    display() {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
}