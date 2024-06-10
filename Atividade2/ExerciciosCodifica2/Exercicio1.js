/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

const prompt = require('prompt-sync')();

let qtdCigarros = parseInt(prompt("Insira a quantidade de cigarros fumados por dia: "));
let anosFumados = parseInt(prompt("Insira a quantidade anos que fuma: "));
calcularVida(qtdCigarros,anosFumados)


function calcularVida(qtdCigarrosDia,anosFumados){
    tempoDeVidaPerdido  = qtdCigarros * 10 * 365 * anosFumados
    console.log(tempoDeVidaPerdido/60/24)
}