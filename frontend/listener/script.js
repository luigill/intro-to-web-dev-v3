// Variável recebe um botão
let button = document.querySelector(".click-btn");

// Associa um evento ao botão
button.addEventListener("click", function () {
  alert("Hello World!");
});

//Evento change
let text = document.querySelector(".input-text");
let result = document.querySelector(".result");
text.addEventListener("change", function () {
  result.textContent = text.value;
});

// Event Delegation
// Evento vai subindo para níveis superiores
document
  .querySelector(".btn-container")
  .addEventListener("click", function (event) {
    alert(`Botão ${event.target.innerText} foi clicado.`);
  });
