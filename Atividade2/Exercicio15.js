/**
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
 */

const prompt = require('prompt-sync')();
let vetorNumeros = [];

function inserirNumero(){
    for (i = 1;i<=10;i++){
        let numero = parseInt(prompt("Digite o valor a ser inserido:"))
        vetorNumeros.push(numero)
    } 
}

function imprimirValoresPares(vetor){
    for (i = 0;i <= vetor.length;i++){
        if(vetor[i] % 2 == 0){
            console.log(`O ${i + 1}º número é par, o valor inserido foi ${vetor[i]}`)
        }
    }
}

inserirNumero()
imprimirValoresPares(vetorNumeros)