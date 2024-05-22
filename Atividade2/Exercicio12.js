/**
 * Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
 */


let valorAnt = 1
let valorProx = 1
let aux;


for(i=0;i <= 9; i++){
    if(i === 0){
        console.log(valorProx)
    }
    else if(i === 1){
        console.log(valorProx)
    }
    else{
        aux = valorAnt + valorProx
        valorAnt = valorProx
        valorProx = aux
        console.log(aux)
    }
}