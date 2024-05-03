const prompt = require('prompt-sync')();

let qtdCigarros = parseInt(prompt("Insira a quantidade de cigarros fumados por dia: "));
let anosFumados = parseInt(prompt("Insira a quantidade anos que fuma: "));
calcularVida(qtdCigarros,anosFumados)


function calcularVida(qtdCigarrosDia,anosFumados){
    tempoDeVidaPerdido  = qtdCigarros * 10 * 365 * anosFumados
    console.log(tempoDeVidaPerdido/60/24)
}