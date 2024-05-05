/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();

let distanciaViagem = parseInt(prompt("Digite a distância do seu percurso: "));

calcularTarifaViagem(distanciaViagem)



function calcularTarifaViagem(distanciaViagem){
    if (distanciaViagem <= 200){
        console.log(` valor a ser pago sera de ${distanciaViagem * 0.50} reais`)
    }
    else{
        console.log(`O valor a ser pago sera de ${distanciaViagem * 0.45} reais`)
    }
}