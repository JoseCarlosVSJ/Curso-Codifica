/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Digite o primeiro lado:"))
let lado2 = parseInt(prompt("Digite o segundo lado:"))
let lado3 = parseInt(prompt("Digite o terceiro lado:"))


verificarTriangulo(lado1,lado2,lado3)

function verificarTriangulo(lado1,lado2,lado3){
    if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado1 + lado3 < lado2){
        console.log("Não é possivel criar um triangulo")
    }
    else if(lado1 == lado2 && lado2 == lado3){
        console.log("Triangulo Equilátero")
    }
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log("Triangulo Isósceles")
    }
    else{
        console.log("Triangulo Escaleno")
    }
}