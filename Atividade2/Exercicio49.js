/**
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function transacao(id,valor, data,categoria) {
    this.id = id;
    this.valor = valor;
    this.data = data;
    this.categoria = categoria;
}

let transacao1 = new transacao(1,200,"26/05/2024",2)
let transacao2 = new transacao(1,600,"26/05/2024",2)
let transacao3 = new transacao(1,200,"26/05/2024",1)
let transacao4 = new transacao(1,200,"26/05/2024",3)

let arrayTransacoes = [transacao1,transacao2,transacao3,transacao4]

let arrayTransacoesAgrupadas = []

arrayTransacoes.forEach(item => {
    if (arrayTransacoesAgrupadas[item.categoria]) {
        arrayTransacoesAgrupadas[item.categoria].valor += item.valor;
    } else {
        arrayTransacoesAgrupadas.push(item)
    }
});

console.log(arrayTransacoesAgrupadas)