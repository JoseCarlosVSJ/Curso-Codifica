/**
Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. 
*/

const prompt = require('prompt-sync')();

let tempoAtividade = parseInt(prompt("Digite em horas, quantidade de horas em atividade no mês:"))

let totalPontos = calcularPontos(tempoAtividade)
let saldoFinal = calcularValor(totalPontos)

console.log(`Você treinou um total de ${tempoAtividade} horas, totalizando ${totalPontos} pontos e R$ ${saldoFinal} reais`)

function calcularPontos(tempoAtividade){
    let totalPontos;
    if (tempoAtividade <= 10){
        totalPontos = tempoAtividade * 2
    }
    else if(tempoAtividade > 10 && tempoAtividade <= 20){
        totalPontos = tempoAtividade * 5
    }
    else{
        totalPontos = tempoAtividade * 10
    }
        return totalPontos
}

function calcularValor(totalPontos){
    let saldoFinal;
    saldoFinal = totalPontos * 0.05
    return saldoFinal
}