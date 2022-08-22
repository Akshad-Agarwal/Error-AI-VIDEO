video = "";
status2022 = "";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();

}

function draw() {
    image(video,0,0,500,500)
}

function start() {
    ObjectDetect = ml5.objectDetector("cocossd", modelReady);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelReady() {
    console.log("modelLoaded");
    status2022 = true;
    video.speed(1);
    video.volume(0);
    video.loop();
}