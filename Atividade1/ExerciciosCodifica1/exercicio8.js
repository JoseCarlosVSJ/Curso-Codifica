// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Insira o primeiro número: "));
let num2 = parseFloat(prompt("Insira o segundo número: "));


if(num1 > num2){
    for(num2;num2 <= num1;num2++){
        console.log(num2)
    }
}
else{
    for(num1;num1 <= num2;num1++){
        console.log(num1)
    }
}