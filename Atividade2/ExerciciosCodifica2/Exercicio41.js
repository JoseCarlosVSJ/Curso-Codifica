/**
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

class Pessoa {
  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }
}

let p1 = new Pessoa("Jacques", 20);

console.log(p1)

p1.email = "Jacques@email.com"

console.log(p1)