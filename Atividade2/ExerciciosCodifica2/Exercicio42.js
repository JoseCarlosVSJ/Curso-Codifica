/**
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

class Dados {
    constructor(numero1, numero2, string1, string2, array1, array2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.string1 = string1;
        this.string2 = string2;
        this.array1 = array1;
        this.array2 = array2;
    }
}


let dados1 = new Dados(10,20,"ola","mundo",['Arroz','Feijao','carne','salada'],['pudim','pave'])

let novoObjeto = {};

Object.entries(dados1).forEach(([key, value]) => {
    if (Array.isArray(value)) {
        novoObjeto[key] = value;
    }
});

console.log(novoObjeto);