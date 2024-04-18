const prompt = require('prompt-sync')();

let votosBrancos = parseInt(prompt("Insira a quantidade de votos brancos: "));
let votosNulos = parseInt(prompt("Insira a quantidade de votos Nulos: "));
let votosValidos = parseInt(prompt("Insira a quantidade de votos Válidos: "));
let total = votosBrancos + votosNulos + votosValidos;

console.log("A quantidade de votos válidos são", votosValidos / total);
console.log("A quantidade de votos nulos são", votosNulos / total);
console.log("A quantidade de votos Brancos são", votosBrancos / total);