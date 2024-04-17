// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

let valor = parseFloat(prompt("Insira o valor em Celsius: "));


f = (valor * 1.8) + 32;

console.log(f);
