/**
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

class ObjetoTeste {
    constructor(numero1, numero2, string1, string2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.string1 = string1;
        this.string2 = string2;
    }
}


let objTeste1 = new ObjetoTeste(10,20,"ola","mundo")
let cont = 0
for (element in objTeste1) {
    if (typeof objTeste1[element] === 'string') {
        console.log(objTeste1[element]);
        cont ++
    }
}
console.log(cont)