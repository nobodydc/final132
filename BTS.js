pic = "";
status = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log(" Model is loaded ");
    status = true;
    objdetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results)
}

function preload(){
pic = loadImage('btspic.jfif');
}


function draw(){
    image(pic,0,0,640,420);
    fill('#fc0303');
    text("V",20,53);
    noFill();
    stroke('#00ff1a');
    rect(15,43,80,80);
    
    fill('#fc0303');
    text("Jin",101,45);
    noFill();
    stroke('#00ff1a');
    rect(100,33,80,80);
    
    fill('#fc0303');
    text("Jungkook",186,43);
    noFill();
    stroke('#00ff1a');
    rect(180,33,80,80);
    
    fill('#fc0303');
    text("RM",271,45);
    noFill();
    stroke('#00ff1a');
    rect(270,33,90,90);
    
    fill('#fc0303');
    text("Suga",370,69);
    noFill();
    stroke('#00ff1a');
    rect(370,53,80,80);
    
    fill('#fc0303');
    text("Jimin",471,70);
    noFill();
    stroke('#00ff1a');
    rect(470,63,80,80);
    
    fill('#fc0303');
    text("Jhope",571,40);
    noFill();
    stroke('#00ff1a');
    rect(565,33,85,90);
    
}