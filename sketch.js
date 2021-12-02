//Funções do Jogo
function setup() {
  createCanvas(500, 400);
  sonsTrilha.loop();
}

function draw() {
  background(imgEstrada);  
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  posicaoInicialCarro();
  passouTodaTela();
  verificaColisao();
  mostraPontos();
  marcarPontos();
  podeSeMover();
}









