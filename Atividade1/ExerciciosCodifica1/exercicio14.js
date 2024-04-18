const prompt = require('prompt-sync')();
let num = 1
let cont = 0
let soma = 0

while(num != 0){
    let num = parseFloat(prompt("Insira o número para tirar a média (Digite 0 para sair): "));
    if (num !== 0){
        soma = soma + num;
        cont = cont + 1;
    }
    else{
        break;
    }
}

console.log(soma / cont)