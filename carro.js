let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [40, 95, 150, 210, 260, 320];
let velocidadeCarros = [2,3,2.5,3.5,2.5,5]
let larguraCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}
  
function movimentaCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
}

function posicaoInicialCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 500;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}