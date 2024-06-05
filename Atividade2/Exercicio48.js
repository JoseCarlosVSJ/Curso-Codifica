/**
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, o valor e a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

class ItemLojaA {
    constructor(chave, valor, quantidade) {
        this.chave = chave;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

class ItemLojaB {
    constructor(chave, valor, quantidade) {
        this.chave = chave;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

function itemLojas(chave, valor, quantidade) {
    this.chave = chave;
    this.valor = valor;
    this.quantidade = quantidade;
}


let itemA1 = new ItemLojaA(1,200,100)
let itemA2 = new ItemLojaA(3,200,100)
let itemA3 = new ItemLojaA(7,200,100)
let itemB1 = new ItemLojaB(6,200,100)
let itemB2 = new ItemLojaB(1,200,100)
let itemB3 = new ItemLojaB(7,200,50)

arrayItens = [itemA1,itemA2,itemA3,itemB1,itemB2,itemB3]

let arrayItensCombinado = []

arrayItens.forEach(item => {
    if (arrayItensCombinado[item.chave]) {
        arrayItensCombinado[item.chave].quantidade += item.quantidade;
    } else {
        arrayItensCombinado[item.chave] = new itemLojas(item.chave, item.valor, item.quantidade);
    }
});

const newArr = arrayItensCombinado.filter((a) => a);

console.log(newArr)