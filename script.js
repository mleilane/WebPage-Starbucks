
// criando a função que vai alterar as imagens de acordo com o botão selecionado
// o que teremos que alterar no HTML? R: O caminho da imagem com classe Starbucks

let imagem = document.querySelector(".starbucks"); // vai no HTML e procura um elemento com a classe starbucks
let circulo = document.querySelector(".circulo"); // vai no HTML e procura um elemento com a classe circulo

function trocaImagem(endereco) {
  imagem.src = endereco;

  // quando a função trocaImagem() for chamada, vamos mudar o src e colocar o caminho que esta salvo na variavel endereco
}

function trocaCorCirculo(cor) {
  circulo.style.background = cor;

  //quando a função trocaCorCirculo() for chamada, vai mudar a cor do background do cirulo
}


