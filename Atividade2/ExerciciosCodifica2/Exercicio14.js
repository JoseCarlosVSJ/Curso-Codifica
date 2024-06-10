/**
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
 */
const prompt = require('prompt-sync')();
let vetorNomes = [];

function cadastrarNomes(){
    for (i = 1;i<=7;i++){
        let nome = prompt(`Digite o ${i}º nome:`)
        vetorNomes.push(nome)
    } 
}

function imprimirNomes(){
    for (i = 6;i>=0;i--){
        console.log(`O ${i + 1}º nome foi ${vetorNomes[i]}`)
    } 
}

cadastrarNomes()
imprimirNomes()