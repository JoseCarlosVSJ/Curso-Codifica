/**
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/
let matriz = [];
let matrizX = [];
const prompt = require('prompt-sync')();
let a = parseInt(prompt("Digite o valor a ser buscado:"))

for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.round(Math.random() * 100);
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz Inicial:")
for (let i = 0; i < 5; i++) {
    console.log(matriz[i].join(' '));
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")

let contador = 0;
for (let i = 0; i < 5; i++) {

    matrizX[i] = [];
    for (let j = 0; j < 5; j++) {
        if (a != matriz[i][j]){
        matrizX[i][j] = matriz[i][j];
        }
        else{
            contador += 1
        }
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz X:")
for (let i = 0; i < 5; i++) {
    console.log(matrizX[i].join(' '));
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log(contador)
