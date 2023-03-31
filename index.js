function gerarNumero() {
  const numero = Math.floor(Math.random() * 6) + 1;
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = numero;
}
const botao = document.getElementById('botao');
botao.addEventListener('click', gerarNumero);
