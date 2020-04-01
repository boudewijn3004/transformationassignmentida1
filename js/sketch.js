let angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCapture(400, 400);
    camboxes = new Cambox();

    for (let i = 0;  i < 100; i++) {
        camboxes[i] = new Cambox(random(400), random(width/3), random(height/3), random(30));
    }
}

function draw() {
    background(0);
    // fill(255, 0, 0);

    for (let i = 0;  i < 100; i++ ) {
        camboxes[i].draw();
        camboxes[i].update();
    }

}

class Cambox {
    constructor(size, posX, posY, posZ) {
        this.size = size;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
    }

    draw() {
        box(this.size);
        translate(this.posX, this.posY, this.posZ)
    }

    update() {
        texture(cam);
        rotateZ(angle);
        rotateX(angle);
        angle = mouseX*0.001;

    }
}