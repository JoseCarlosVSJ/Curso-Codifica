// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

const prompt = require('prompt-sync')();

let codigoProduto = parseInt(prompt("Insira o código de origem do produto: "));


if (codigoProduto === 1){
    console.log("Produto do Sul")
}
else if(codigoProduto === 2){
    console.log("Produto do Norte")
}
else if(codigoProduto === 3){
    console.log("Produto do Leste")
}
else if(codigoProduto === 4){
    console.log("Produto do Oeste")
}
else if(codigoProduto === 5 || codigoProduto === 6){
    console.log("Produto do Nordeste")
}
else if(codigoProduto >=7 && codigoProduto <=9){
    console.log("Produto do Sudeste")
}
else if(codigoProduto >=10 && codigoProduto <=20){
    console.log("Produto do Centro-Oeste")
}
else if(codigoProduto >=25 && codigoProduto <=50){
    console.log("Produto do Nordeste")
}
else{
    console.log("Produto do Importado")
}