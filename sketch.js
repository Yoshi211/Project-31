const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var divisions = [];
var plinkos = [];

var divHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,790,500,20);
  ground2 = new Ground(0,400,10,800);
  ground3 = new Ground(480,400,10,800);
  
  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new div(k, height-divHeight/2,10,divHeight));
  }

  // if(frameCount%60===0){
  //   particles.push(new particle(random(width/2-10,width/2+10),10,10));
  // }

  for(j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j,50,10));
  }

  for(j = 15; j <= width; j = j + 50){
    plinkos.push(new plinko(j,100,10));
  }

  for(j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j,150,10));
  }

  for(j = 15; j <= width; j = j + 50){
    plinkos.push(new plinko(j,200,10));
  }

  for(j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j,250,10));
  }

  for(j = 15; j <= width; j = j + 50){
    plinkos.push(new plinko(j,300,10));
  }

  for(j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j,350,10));
  }

  for(j = 15; j <= width; j = j + 50){
    plinkos.push(new plinko(j,400,10));
  }

  for(j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j,450,10));
  }

  Engine.run(engine);
}

function draw() {
  background("black");  

  if(frameCount%10===0){
    particles.push(new particle(random(10,470),10,10));
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }

  ground1.display();
  ground2.display();
  ground3.display();
  drawSprites();
}