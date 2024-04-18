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