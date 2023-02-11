var bgImg;
var heroImg, hero;
function preload(){
    bgImg= loadImage("background.png");
    heroImg=loadAnimation("heroImg/herostanding1.png","heroImg/herostanding2.png","heroImg/herostanding3.png");
    
}

function setup(){
    createCanvas(800,400);
    hero=createSprite(50,350,100,100);
    hero.addAnimation("herostanding",heroImg);
}

function draw(){
    background(bgImg);
    drawSprites();
        
}