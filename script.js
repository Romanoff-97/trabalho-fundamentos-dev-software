const botaoInterativoEl = document.getElementById("botao-interativo");
let cont = 0;

botaoInterativoEl.addEventListener("click", function () {
  cont++;
  const mensagem = `Oi! Tudo bem?! Você clicou no botão ${cont} vezes!`;
  const paragrafoEl = document.createElement("p");
  paragrafoEl.textContent = mensagem;
  paragrafoEl.id = "mensagem-interativa";
  paragrafoEl.name = "mensagem-interativa";

  if (cont == 1) {
    botaoInterativoEl.appendChild(paragrafoEl);
  } else {
    const mensagemAnteriorEl = document.getElementById("mensagem-interativa");
    mensagemAnteriorEl.textContent = mensagem;
  }
});