const Bodies= Matter.Bodies;
const World = Matter.World;
const Engine= Matter.Engine;
snowList=[]


function preload(){
backgroungimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  ground1=new Ground(width/2,height,800,7)
  //createSprite(400, 200, 50, 50);
  snow1=new Snow(100,200)
  console.log(snow1)


}

function draw() {
  background(backgroungimg); 
  Engine.update(engine) 
  snow1.display()
  //console.log(snow1.body.position.y)
  

  if(frameCount%20===0){
  snowList.push(new Snow(random(1,800),random(1,100)))

  }
 for(i=0;i<snowList.length;i=i+1){
 snowList[i].display()

 }
 //not calling ground.display() so as to make ground invisible
 //ground1.display()




}









