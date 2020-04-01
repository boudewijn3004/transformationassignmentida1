let angleX = 0;
let angleZ = 0;
let img;
let fillColor;
let pg;
var numberofobjects = 10;

function preload() {
    img = loadImage('img/celltex.jpg');
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
   fillColor = color(222,0,0);
    pg = createGraphics(256,256);
    cam = createCapture(400, 400);
    trobjects = new TransformedObject();
    for(let i = 0;  i < numberofobjects; i++) {
        trobjects[i] = new TransformedObject(random(100),random(200),random(-width/2,width/2), random(-height/2, height/2));
    }

}



function draw() {


    background(20,10,100);
    noStroke();

    // normalMaterial();

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    ambientLight(200);
    directionalLight(255, 0, 0, 0.8, 0.8, 0);
    pointLight(0, 0, 255, locX, locY, 250);

    for(let i = 0;  i < numberofobjects; i++) {
        trobjects[i].show();
        trobjects[i].update(mouseX*0.0002);
    }

    // cylinder(10,mouseX);
    angleX = 1;
    angleZ = 0.01;
}

function mousePressed() {
    fillColor = color(0,222,0);
}

class TransformedObject {
    constructor(sizeX,sizeY, posX, posY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.posX = posX;
        this.posY = posY;
    }

    show() {
        texture(img);
        // rotateX(90);
        // fill(0)
        push();
        translate(this.posY,0,0);
        sphere(this.sizeX*mouseY*0.02, 400);
        // sphere(this.sizeX*mouseY*0.002);

        pop();
    }

    update(rSpeed) {
        rotateY(rSpeed);
    }




}