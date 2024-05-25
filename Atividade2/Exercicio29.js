/**
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

let somalinha4 = 0;
let somacoluna2 = 0;
let somaDiagonal = 0;
let total = 0;

let matriz = [];
for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.round(Math.random() * 100);
    }
}

for (let i = 0; i < 5; i++) {
    console.log(matriz[i].join(' '));
}

for (let i = 0; i < 5; i++) {
        if(i == 3){
            for(let j = 0; j < 5;j++){
                somalinha4 += matriz[i][j]
            }
        }
    }

    for (let i = 0; i < 5; i++) {
            for(let j = 0; j < 5;j++){
                if(j == 1){
                    somacoluna2 += matriz[i][j]
                }
            }
        }

    for (let i = 0; i < 5; i++) {
        for(let j = 0; j < 5;j++){
            if(j == i){
                somaDiagonal += matriz[i][j]
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        for(let j = 0; j < 5;j++){
            total += matriz[i][j]
        }
    }

console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
console.log(`A soma da 4º linha tem o total de ${somalinha4}`)
console.log(`A soma da 2º coluna tem o total de ${somacoluna2}`)
console.log(`A soma da diagonal tem o total de ${somaDiagonal}`)
console.log(`A soma da matriz tem o total de ${total}`)