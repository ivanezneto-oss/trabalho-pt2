// Seleciona todos os botões da página
const botoes = document.querySelectorAll("button");

// Adiciona a funcionalidade de curtir/descurtir para cada botão
botoes.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function botaoClicado() {
    let texto = botao.querySelector("span");

    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  });
});