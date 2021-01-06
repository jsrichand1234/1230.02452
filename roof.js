class Roof {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            stiffness: 0.5

        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)

    }

    display() {
        fill("lime")
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)

    }

}
