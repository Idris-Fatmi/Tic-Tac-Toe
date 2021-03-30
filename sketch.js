var gamestate=0
var playerCount
var database

function setup() {
  createCanvas(800,800);
  database=firebase.database()
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}