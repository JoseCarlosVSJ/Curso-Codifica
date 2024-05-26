/**
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

function obj1(elemento1, elemento2, elemento3) {
    this.elemento1 = elemento1;
    this.elemento2 = elemento2;
    this.elemento3 = elemento3;
}

function obj2(elemento1, elemento4, elemento5) {
    this.elemento1 = elemento1;
    this.elemento4 = elemento4;
    this.elemento5 = elemento5;
}

let objeto1 = new obj1(2, 5, 7);
let objeto2 = new obj2(9, 6, 8);

let objeto3 = {};
for (chave in objeto1) {
    if (objeto1.hasOwnProperty(chave)) {
        objeto3[chave] = objeto1[chave];
    }
}
for (chave in objeto2) {
    if (objeto2.hasOwnProperty(chave)) {
        objeto3[chave] = objeto2[chave];
    }
}

console.log(objeto3);
