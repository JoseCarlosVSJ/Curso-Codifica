/**
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
 */

let resultado = gerarVetorAleatorio();
let apostas = [];


function gerarVetorAleatorio() {
    let vetor = [];
    for (let i = 0; i < 5; i++) {
        vetor[i] = Math.round(Math.random() * 10); // Gera números aleatórios entre 0 e 10
    }
    return vetor;
}



console.log("Resultado:", resultado);


for (let i = 0; i < 50; i++) {
    apostas.push(gerarVetorAleatorio());
}


console.log("Resultados das Apostas:");

apostas.forEach((aposta) => {
    if (apostas.sort().toString() === resultado.sort().toString()) {
        console.log(`Aposta ${aposta.indexOf}: Ganhador`);
    } else {
        console.log(`Aposta ${aposta.indexOf}: Perdedor`);
    }
});