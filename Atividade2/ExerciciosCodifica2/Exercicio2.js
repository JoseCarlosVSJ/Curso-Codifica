/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();

let velocidadeCarro = parseInt(prompt("Insira a velocidade do carro: "));
multa80km(velocidadeCarro)



function multa80km(velocidadeCarro){
    if (velocidadeCarro > 80){
        console.log("Você foi multado!")
    }
}