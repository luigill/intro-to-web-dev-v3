let buffer = "0";
let operadorAnterior;
let montanteTotal = 0;

let operations = document.querySelector(".opt-btns");
let number = document.querySelector(".number-btn");
let reset = document.querySelector(".reset-btn");
let display = document.querySelector(".display");

display.innerText = buffer;

number.addEventListener("click", function (event) {
  console.log(event.target.innerText);
  handleNumber(event.target.innerText);
});

operations.addEventListener("click", function (event) {
  console.log(event.target.innerText);
});

reset.addEventListener("click", function (event) {
  console.log(event.target.innerText);
});

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
  rerender();
  console.log(buffer);
}

function handleMath(value) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);
  if (montanteTotal === 0) {
    montanteTotal = intBuffer;
  } else {
    makeOperation(intBuffer);
  }

  operadorAnterior = valor;

  buffer = "0";
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      montanteTotal = 0;
      break;
    case "=":
      if (operadorAnterior === null) {
        return;
      }
      makeOperation(parseInt(buffer));
      operadorAnterior = null;
      buffer = +montanteTotal;
      montanteTotal = 0;
      break;
    case "D":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "x":
    case "/":

    default:
      break;
  }
}

function makeOperation(intBuffer) {
  if (operadorAnterior === "+") {
    montanteTotal += intBuffer;
  } else if (operadorAnterior === "-") {
    montanteTotal -= intBuffer;
  } else if (operadorAnterior === "×") {
    montanteTotal *= intBuffer;
  } else {
    montanteTotal /= intBuffer;
  }
}

function rerender() {
  display.innerText = buffer;
}
