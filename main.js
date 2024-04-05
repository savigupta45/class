function preload()
{
clown_nose = loadImage('https://i.postimg.cc/xdvzKxc0/Clown-Nose-Download-PNG-Image.png');
} 
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
}
function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotpose(results)
{
    if(results.length> 0)
    {
console.log(results);
    console.log("nose x=" + results[0].pose.nose.x);
    console.log("nose y=" +results[0].pose.nose.y);

    }

    
}
function draw()
{
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY, 20);
image(clown_nose, noseX, noseY, 30, 30);
}

