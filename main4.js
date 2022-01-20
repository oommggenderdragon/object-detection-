img="";
status ="";
objects = [];

function preload(){
img = loadImage("kinchen.jpg");
}
function setup(){
canvas = createCanvas(640 ,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "status: Detecting Objects";

}
function draw(){
image(img, 0,0 ,640,400);


if(status != "" ){
for(i = 0;i < objects.length;i++){

document.getElementById("status").innerHTML = "status: Object Dectected";
fill("#ff0000");
percent = floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
noFill();
stroke("#ff0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);


}

}
}
function modelLoaded(){
console.log("modelLoaded");
status = true;
objectDetector.detect(img,gotResults);

}
function gotResults(error,results){
if(error){
    console.log(error);
}
    console.log(results);
    objects = results;

}

    




