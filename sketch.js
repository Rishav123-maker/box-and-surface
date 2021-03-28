var canvas,surface1,surface2,surface3,surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
    surface1 = createSprite(110,570,180,20);
    surface2 = createSprite(305,570,180,20);
    surface3 = createSprite(500,570,180,20);
    surface4 = createSprite(695,570,180,20);

    surface1.shapeColor = "blue";
    surface2.shapeColor = "yellow";
    surface3.shapeColor = "red";
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,30,30);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edge = createEdgeSprites();
    box.bounceOff(edge);
    
    
   
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red";
        music.play();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
        music.play();
    }
    drawSprites();
}
