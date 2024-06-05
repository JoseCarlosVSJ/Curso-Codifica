/**
Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

class ObjetoEntrada {
    constructor(codCliente, nomeCliente) {
        this.codCliente = codCliente;
        this.nomeCliente = nomeCliente;
    }
}

let objEntrada = new ObjetoEntrada(1, "Jose");

let novoObjeto = {};

for (let elem in objEntrada) {
    if (elem === "codCliente"){
        novoObjeto[elem] = objEntrada[elem] + 1;
    }
    else{
        novoObjeto[elem] = objEntrada[elem]
    }
}

console.log(novoObjeto);