// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let qtdMacas = parseFloat(prompt("Insira a quantidade de maças que deseja comprar: "));


if(qtdMacas < 12){
    console.log("O valor total ficou:", qtdMacas * 0.3)
}
else{
    console.log("O valor total ficou:", qtdMacas * 0.25)
}