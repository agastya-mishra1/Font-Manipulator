var text_name;
difference=0;
leftWrist_x=0;
rightWrist_x=0;

function preload(){

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(560,250);
    video=createCapture(VIDEO);
    video.size(550,500);

    
    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses);

    function ModelLoaded(){
        console.log("PoseNet is Intitalized");
    }


    function gotPoses(results){
        if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
    }
}
function draw(){
    background('#6C91C2');

    document.getElementById("name_here").innerHTML = "Font size of the text will be = " + difference +"px";
  textSize(difference);
  fill('#FFE787');
  text(text_name, 50, 400);
}

function submit(){
    text_name=document.getElementById("name_here").innerHTML;
    console.log(text_name);
}
