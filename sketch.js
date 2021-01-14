var canvas;
var music,surface1,surface2,surface3,surface4,ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(60,590,200,10);
    surface1.shapeColor = "Blue";
    surface2 = createSprite(270,590,200,10);
    surface2.shapeColor = "Yellow";
    surface3 = createSprite(480,590,200,10);
    surface3.shapeColor = "Pink";
    surface4 = createSprite(690,590,200,10);
    surface4.shapeColor = "green";
    ball = createSprite(Math.round(random(20,750)),200,10,10);
    ball.shapeColor = "white";
    ball.velocityY = 5;
    ball.velocityX = 5; 
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
   
    if (ball.bounceOff(surface1)){
        music.play();
        ball.shapeColor = "blue";
    }
    ball.bounceOff(surface1);
    if (ball.bounceOff(surface2)){
        ball.velocityY=0;
        ball.velocityX = 0;
        ball.shapeColor = "yellow";
    }
    ball.bounceOff(surface2);
    if (ball.bounceOff(surface3)){
        music.stop();
        ball.shapeColor = "pink";
        console.log("i was here");
    }
    
    ball.bounceOff(surface3);
    if (ball.bounceOff(surface3)){
        music.stop();
        ball.shapeColor = "pink";
        console.log("i was here");
    }
        if (ball.bounceOff(surface4)){
        ball.shapeColor = "green";
    }
    ball.bounceOff(surface4);
    drawSprites();
}
