/**
Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
 */

let valorAnt = 1
let valorProx = 1
let aux;
let vetorFibonacci = []

for(i=0;i <= 9; i++){
    if(i === 0){
        console.log(valorProx)
        vetorFibonacci.push(valorProx)
    }
    else if(i === 1){
        console.log(valorProx)
        vetorFibonacci.push(valorProx)
    }
    else{
        aux = valorAnt + valorProx
        valorAnt = valorProx
        valorProx = aux
        vetorFibonacci.push(aux)
        console.log(aux)
    }
}

console.log(vetorFibonacci.toString())