//criação das sprites 

// criaçao das sprites do trex
var trex, trex_running, trex_collided;

//criaçao das sprites do chao
var solo, invisibleGround, groundImage,solar;

// carregar imagens para usar no código
function preload() {
  
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
}


// criar sprites - configurar sprites - adicionar animações ou imagens 
function setup() {
  //cria a tela
  createCanvas(600, 200);
  
  //cria o trex
  trex = createSprite(50,160,20,50);
  // coloca a animação no trex
  trex.addAnimation("running", trex_running);
  // cria a escala do trex
  trex.scale = 0.5;
  //velocidade pernas do trex 
  trex.frameDelay = 1;
  
  // cria o solo
  solo = createSprite(200,180,400,20);
  // adiciona a imagem na sprite
  solo.addImage("ground",groundImage);
  solo.x = ground.width /2;
  //adiciona velocidade do solo - anda pra esquerda (x)
  solo.velocityX = -4;
  
  //cria o solo 
  solar = createSprite(300,200,600,20);
  //deixamos o solo invisivel
  solar.visible=false;
  
  
}

// ações - tudo que o jogo faz

function draw() {
  //cor da tela
  background("pink");
  
  //mostra na tela o valor do trex na posicao y
  console.log(trex.y);
  
  // quando você apertar espaço - trex pula pra cima
  if (keyDown("space")) {
  // testa se o trex está no chao  
    if(trex.y>=144){
    trex.velocityY = -20;
    }
  
  }
  
  
  
  //gravidade
  trex.velocityY = trex.velocityY + 0.8;
  
  
  //reinicia o solo - faz o solo nunca acabar
  if (solo.x < 0) {
    solo.x = solo.width / 2;
  }
  
  // colisao do trex com o chao invisivel 
  trex.collide(solar);
  
  
  //desenha as nossas sprites
  drawSprites();
}
