// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Insira o primeiro lado do triangulo: "));
let lado2 = parseFloat(prompt("Insira o segundo lado do triangulo: "));
let lado3 = parseFloat(prompt("Insira o terceiro lado do triangulo: "));

if (lado1 + lado2 >= lado3 && lado3 + lado2 >= lado1 && lado1 + lado3 >= lado2){
    if (lado1 === lado2 && lado1 === lado3){
        console.log("O triângulo é equilátero");
    }
    else if(lado1 !== lado2 && lado1 !== lado3){
        console.log("O triângulo é escaleno");
    }
    else{
        console.log("O triângulo é isóceles");
    }}
else{
    console.log("Não é possível criar um triângulo");
}