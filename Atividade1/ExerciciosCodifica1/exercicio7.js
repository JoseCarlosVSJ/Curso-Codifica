const prompt = require('prompt-sync')();

let qtdMacas = parseFloat(prompt("Insira a quantidade de maças que deseja comprar: "));


if(qtdMacas < 12){
    console.log("O valor total ficou:", qtdMacas * 0.3)
}
else{
    console.log("O valor total ficou:", qtdMacas * 0.25)
}