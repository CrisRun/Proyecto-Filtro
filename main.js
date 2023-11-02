narizX = 0;
narizY = 0;

ojosX = 0;
ojosY = 0;

bocaX = 0;
bocaY = 0;


function preload(){
    sombrero =
loadImage('https://i.postimg.cc/qBsnYMFH/cartoon-illustration-magic-hat-halloween-free-png.png');
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet esta inicializado');
}

function gotPoses(results){
    if (results.length > 0){
        narizX = results[0].pose.nose.x - 80;
        narizY = results[0].pose.nose.y - 200;
        console.log("narizX =" + narizX);
        
    }      
}

function draw(){
    image(video, 0, 0, 350, 350,);
    //image(nariz, narizX, narizY, 50, 50);
    image(sombrero, narizX, narizY, 150, 150);
}

function take_snapshot(){
    save('miImagen.png');
}
