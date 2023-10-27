const diasDaSemana = [
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
  "domingo",
];

// Todo o array
console.log(diasDaSemana);

// Primeiro elemento
console.log(diasDaSemana[0]);

// Último elemento
console.log(diasDaSemana[6]);

// Undefined: Acesso a espaço de memória impróprio
console.log(diasDaSemana[7]);

// Tamanho do array
console.log(diasDaSemana.length);

// Adiciona todos os elementos de um array em uma string separados por um algum char
console.log(diasDaSemana.join(" | "));

// Insere mais um elemento no final do array
diasDaSemana.push("maisUmDiaDeFinalDeSemana");
console.log(diasDaSemana);

// Remove o último elemento do array ->  Retorna o elemento retirado
let removido = diasDaSemana.pop();
console.log(removido);

// Iterando em arrays

// Método 1

for (let index = 0; index < diasDaSemana.length; index++) {
  console.log("Nova iteração");
  console.log(diasDaSemana[index]);
}

// Método 2
// forEach recebe uma função como parâmetro
diasDaSemana.forEach(function (diasDaSemana) {
  console.log("Usando forEach");
  console.log(diasDaSemana);
});

// ou...

//function printDias(diasDaSemana){
//console.log("Usando forEach");
//console.log(diasDaSemana);
//}

//diasDaSemana.forEach(printDias);
