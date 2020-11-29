const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;

var engine, world;
var ground;
var log,log1,log2,log3,log4,log5,log6,log7,log8,log9,log10,log11,log12;
var bg;
var p;
var score = 0;
var count = 0;
var gameState = "start";

var particles = [];
var plinkos = [];
var particle;

function preload(){
  bg = loadImage("sprites/BG.jpg");
}



function setup() {
  createCanvas(740,900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(370,860,815,170);
  log = new Log(110,680,30,300);
  log1 = new Log(230,680,30,300);
  log2 = new Log(350,680,30,300);
  log3 = new Log(10,400,20,850);
  log4 = new Log(730,400,20,850);
  log5 = new Log(470,680,30,300);
  log6 = new Log(600,680,30,300);
  // g = Ground
  log7 = new Log(57,750,79,20);//1g
  log8 = new Log(170,750,90,20);//2g
  log9 = new Log(290,750,90,20);//3g
  log10 = new Log(410,750,90,20);//4g
  log11 = new Log(535,750,100,20);//5g
  log12 = new Log(669,750,107,20);//6g
  
 

  for (var j = 25; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 25; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 25; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 25; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }

 

}

function draw() {
 
  background(bg);  

  log.display();
  log1.display();
  log2.display();
  log4.display();
  log3.display();
  log5.display();
  log6.display();
  log7.display();
  log8.display();
  log9.display();
  log10.display();
  log11.display();
  log12.display();


  
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 15, 550);
  text(" 500 ", 130, 550);
  text(" 200 ", 250, 550);
  text(" 200 ", 370, 550);
  text(" 100 ", 490, 550);
  text(" 100 ", 620, 550);

  
   if(gameState === "END"){     
      textSize(100);
      text("GameOver", 150, 250);
      textSize(40);
      text("PRESS SPACE TO START AGAIN",60,350);
             
      //return
    
   }
  
  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  

  if(particle!=null)
  {
     particle.display();

     if(particle.body.position.y>700)
     {
       if(particle.body.position.x<200)
       {
          score=score+500;
          particle=null;
          if(count>= 5) gameState = "END"
       }

             
            else if (particle.body.position.x < 500 && particle.body.position.y > 301 ) 
            {
                  score = score + 200;
                  particle=null;
                  if ( count>= 5) gameState ="END";

            }
            else if (particle.body.position.x < 800 && particle.body.position.y > 701 )
            {
                  score = score + 100;
                  particle=null;
                  if ( count>= 5)  gameState ="END";

            }  
            
          }
        }  
            
  for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  
}


function mousePressed()
{
  if(gameState!=="END")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}

function keyPressed(){
     if(keyCode === 32){
        gameState = "start";
        score = 0;
        count = 0;
     }
}