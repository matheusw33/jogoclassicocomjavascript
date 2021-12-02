//Variáveis Ator
let xAtor = 65;
let yAtor = 370;
let larguraAtor = 30;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imgAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor -= 3;
  }   
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }  
  if(keyIsDown(LEFT_ARROW)){
     xAtor -= 3;
  } 
  if(keyIsDown(RIGHT_ARROW)){
     xAtor += 3;
  } 
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 10)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      sonsColidiu.play();
      if(meusPontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function mostraPontos(){
  textSize(20);
  textAlign(CENTER);
  fill(color(255,215,0));
  text(meusPontos, 80, 25);
}

function marcarPontos(){
  if(yAtor < 25){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    sonsPontos.play();
  }
}

function meusPontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 380;
}






