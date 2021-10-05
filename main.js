function setup(){
canvas=createCanvas(600 , 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video , modelLoaded);
pose.on('pose' , gotReults);
}

function draw(){
image(video , 0 , 0 , 600 , 500);

}

function modelLoaded(){
console.log("The model is initialized");
}

song="";
song1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preload(){
song=loadSound("music.mp3");
song1=loadSound("music2.mp3");
}

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function gotReults(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("Left Wrist X="+leftWristX+"Left Wrist Y="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("Right Wrist X="+rightWristX+"Rigth Wrist Y="+rightWristY);
}

















}