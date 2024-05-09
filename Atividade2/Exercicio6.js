/**
 * 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
 * tentar descobrir qual foi o valor sorteado.
 * 
 */

const prompt = require('prompt-sync')();

console.log("Tente adivinhar o número de 1 a 5:")
let tenteAcertar = parseInt(prompt("Digite o seu palpite:"))
valorSorteado = valorInteiro();


if (tenteAcertar == valorSorteado){
    console.log("Você acertou!")
}
else{
    console.log(`Você errou, o valor era ${valorSorteado}`)
}

function valorInteiro() {
    min = 1;
    max = 5;
    return (Math.floor(Math.random() * (max - min) + min))
}