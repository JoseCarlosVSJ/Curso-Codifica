const prompt = require('prompt-sync')();
let num = 1
let peso = 0
let soma = 0

while(num != 0){
    let num = parseFloat(prompt("Insira o número para tirar a média (Digite 0 para sair): "));
    if (num !== 0){
        let aux = parseFloat(prompt("Insira o peso do número: "));
        soma = soma + num;
        peso = peso + aux;
    }
    else{
        break;
    }
}

console.log(soma / peso)