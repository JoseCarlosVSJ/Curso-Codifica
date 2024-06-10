/**
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
 */

let matriz = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Math.round(Math.random() * 100);
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz Original:")
for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join(' '));
}

let somaDS = 0;
for (let i = 0; i < 3; i++) {
    somaDS += matriz[i][2 - i];
}
let mediaDS = somaDS / 3;

for (let i = 0; i < 3; i++) {
    matriz[i][i] *= mediaDS;
}



console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz Modificada:")
for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join(' '));
}