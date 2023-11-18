// Digitos e operações disponíveis
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["x", "/", "+", "-"];
const resets = ["=", "C", "D"];

// Inicializa as variáveis
let operator1 = null;
let operator2 = null;
let operation = null;

function makeOperation(op1, op2, operator) {
  if (operator === "x") {
    return op1 * op2;
  }
  if (operator === "/") {
    return op1 / op2;
  }
  if (operator === "+") {
    return op1 + op2;
  }
  if (operator === "-") {
    return op1 - op2;
  }
}

function clearOperation() {}

// Recebe Display do DOM
let display = document.querySelector(".display");
console.log(display);

// Funciona como um main
let getButtonClick = document
  .querySelector(".btn-area")
  .addEventListener("click", function (event) {
    let variable = event.target.innerText;
    rerender(variable);
    if (variable == "DEL") {
      variable = "D";
    }

    if (variable == "C") {
      clearOperation();
    }
    if (variable == "D") {
    }
  });

if (operator1 != null && operator2 != null && operation != null) {
  makeOperation(operator1, operator2, operation);
}

function rerender(element) {
  display.innerText = element;
}
