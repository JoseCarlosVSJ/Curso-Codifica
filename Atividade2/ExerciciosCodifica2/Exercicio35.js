/**
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
 */

arrayPar = [];
arrayImpar = []

function gerarVetorAleatorio(){
    let vetor = []
    for (let i = 0; i < 30; i++) {
        vetor[i] = Math.round(Math.random() * 100)}
    return vetor
}

let valores = gerarVetorAleatorio();

valores.forEach(valor => {
    if (valor % 2 === 0) {
        arrayPar.push(valor);
        if (arrayPar.length === 5) {
            console.log('Vetor Par:', arrayPar);
            arrayPar = [];
        }
    } 
    else {
        arrayImpar.push(valor);
        if (arrayImpar.length === 5) {
            console.log('Vetor Impar:', arrayImpar);
            arrayImpar = [];
        }
    }
});
if (arrayPar.length > 0 || arrayImpar.length > 0) {
    console.log('Vetor Par Restante:', arrayPar);
    console.log('Vetor Ímpar Restante:', arrayImpar);
}