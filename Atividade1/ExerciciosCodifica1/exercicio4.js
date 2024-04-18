const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Insira a primeira nota: "));
let nota2 = parseFloat(prompt("Insira a segunda nota: "));

media = (nota1 + nota2) / 2

if(media >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}
