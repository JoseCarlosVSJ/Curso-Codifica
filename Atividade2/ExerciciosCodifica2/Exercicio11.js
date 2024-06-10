/**
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
 */

function mostrarTermoseSomar(primeiroTermo,Razao,qtdElementos){
    soma = primeiroTermo
    termoAtual = primeiroTermo
    for (i = 0; i < qtdElementos; i++){
        if (i === 0){
            console.log(termoAtual)
        }
        else{
        termoAtual = termoAtual + Razao
        console.log(termoAtual)
        soma = soma + termoAtual
        }
    }
    console.log(soma)
}

const prompt = require('prompt-sync')();

let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA:"))
let Razao = parseInt(prompt("Digite a razão da PA:"))

mostrarTermoseSomar(primeiroTermo,Razao,10)