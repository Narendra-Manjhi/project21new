var canvas;
var music;
var surfaces1 ,block2 ,surfaces3 ,surfaces4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  surfaces1 =createSprite(60,600,200,50);
  surfaces1.shapeColor ="blue";
   
  block2 =createSprite(275,600,200,50);
  block2.shapeColor = rgb(255,128,0);
   
  surfaces3 =createSprite(490 ,600,200,50);
  surfaces3.shapeColor ="red";

  surfaces4 =createSprite(705,600,200,50);
  surfaces4.shapeColor ="green";

    //create box sprite and give velocity
   
    box =createSprite(random(20,750),100,40,40);
    box.shapeColor ="white";
    box.velocityX=4;
    box.velocityY=9;

    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges =createEdgeSprites();
    box.bounceOff(edges);   
    
    
    //add condition to check if box touching surface and make it box

    if(surfaces1.isTouching(box) && box.bounceOff(surfaces1)){
        box.shapeColor="blue";
        music.play();
    }
    if(block2.isTouching(box)){
       box.shapeColor= rgb(255,128,0);
       box.velocityX=0;
       box.velocityY=0;
       music.stop();
      
    }
    if(surfaces3.isTouching(box) && box.bounceOff(surfaces3)){

        box.shapeColor="red";
       
    }
    if(surfaces4.isTouching(box) && box.bounceOff(surfaces4)){

        box.shapeColor="green";
        
    }


    drawSprites();
}
