/**
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */

let vetorNumeros = [];

function inserirNumeroAleatorios(){
    for (i = 1;i<=10;i++){
        vetorNumeros.push(Math.floor(100 * Math.random()))
    } 
}

inserirNumeroAleatorios()
console.log(vetorNumeros.toString())