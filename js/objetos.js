// Objetos são coleções de informações
// Formato Chave:Valor

const pessoa = {
  nome: "Lui Gill",
  idade: 22,
  cidade: "Pelotas",
  temFome: true,
  // Definição de um método para um objeto
  falar() {
    console.log("Olá Mundo");
  },
  // Pode ser definido dessa maneira também:
  // falar: function(){
  //
  //}
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
console.log(pessoa.temFome);
// Chamada de método pelo objeto
pessoa.falar();

// Objetos podem possuir objetos dentro de si

const objetoTeste = {
  nome: {
    primeiro: "Lui",
    segundo: "Gill",
  },
  endereco: {
    cidade: "Pelotas",
    estado: "RS",
  },
  getAdress: function () {
    // Uso do this
    // O seu valor depende do seu contexto
    // Referencia o próprio objeto que está sendo desenvolvido - acessa as próprias informações do objeto que o this está associado
    console.log(
      `${this.nome.primeiro} ${this.nome.segundo}  ${this.endereco.cidade} ${this.endereco.estado}`
    );
  },
};

console.log(objetoTeste.nome.primeiro);
console.log(objetoTeste.endereco.estado);

console.log(objetoTeste.getAdress());

// this fica associado sempre nesse objeto
const pullAdress = objetoTeste.getAdress.bind(objetoTeste);
console.log(pullAdress());
