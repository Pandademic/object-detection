img = "";
status = "" ;
function preload(){
    img = loadImage('dog-cat.jpg');
}
function setup() { 
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
    document.getElemntById('status').innerHTML = "Status : Detecting Objects";
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
function modelLoaded(){
    console.log("Coco has arrived.Bus 165 with SS is running 30 minutes late! D is still asleep and may not arrive at all ! ");
    status=true;
    objectDetector.detect('img',gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}