const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var bg_img;



function preload() {
bg=loadImage("bg.jpg")
}
function setup() {
 
 createCanvas(1000,800)
bg_img=createSprite(1000,800)
bg_img.addImage("bg",bg)
bg_img.scale=2
  
}

function draw() {
  //image (bg,0,0,1200,700)
background(0)
  drawSprites()
}


