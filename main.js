img = "";
function preload(){
    img = loadImage('dog-cat.jpg');
}
function setup() { 
    canvas = createCanvas(640, 420);
    canvas.center(); 
}
function draw(){
    image(img,0,0,640,420);//cover the canvas with image
    fill('#FF0000');
    text("Dog",45,75);
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);
    fill("#F0F757");
    text("Cat",320,120);
    noFill();
    stroke("#F0757");
    rect(300,90,270,320);

}
