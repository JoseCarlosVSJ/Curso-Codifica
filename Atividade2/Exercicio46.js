/**
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function venda(vendedor,valor) {
    this.vendedor = vendedor;
    this.valor = valor;
}

let venda1 = new venda("Carlos",300)
let venda2 = new venda("Jose",600)
let venda3 = new venda("Maria",500)
let venda4 = new venda("Maria",200)

let vendas = [venda1,venda2,venda3,venda4]

let vendasAgrupadas = []

vendas.forEach(venda => {
    const vendedor = venda.vendedor;
    const valor = venda.valor;

    if (vendasAgrupadas[vendedor]) {
        vendasAgrupadas[vendedor] += valor;
    } else {
        vendasAgrupadas[vendedor] = valor;
    }
});

console.log(vendasAgrupadas)