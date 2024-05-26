/**
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

function dados(numero1,numero2, string1,string2,array1,array2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
    this.string1 = string1;
    this.string2 = string2;
    this.array1 = array1;
    this.array2 = array2;
}

let dados1 = new dados(10,20,"ola","mundo",['Arroz','Feijao','carne','salada'],['pudim','pave'])

console.log(dados1)

for (element in dados1) {
    if (Array.isArray(dados1[element])) {
        console.log(dados1[element]);
    }
}