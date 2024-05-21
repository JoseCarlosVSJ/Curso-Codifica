/**
 * 
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
 */

const prompt = require('prompt-sync')();

let somatorio = 0;
let maiorValor = 0;
let qtdPares = 0;
let numloops = 1;

do{
    let num = parseInt(prompt("Digite um numero: "));
    somatorio = somar(somatorio,num)
    maiorValor = definirMaiorValor(maiorValor,num)
    qtdPares = definirValoresPares(qtdPares, num)
    let continuar = prompt("Você deseja continuar? Digite S para sim ou N para não:").toUpperCase();
    if (continuar !== "S") {
        break;
    }
    numloops += 1
}while (true)

console.log(somatorio)
console.log(maiorValor)
console.log(qtdPares)
console.log(definirMedia(somatorio,numloops))


function somar(somatorio, num){
    somatorio += num
    return somatorio
}

function definirMaiorValor(maiorValor, num){
    if (maiorValor >= num){
        return maiorValor
    }
    else{
        return num
    }
}


function definirMedia(somatorio,qtdVezesInseridas){
    return somatorio / (qtdVezesInseridas)
}

function definirValoresPares(qtdPares, num){
    if(num % 2 == 0){
        return qtdPares += 1
    }
    else{
        return qtdPares
    }
}

