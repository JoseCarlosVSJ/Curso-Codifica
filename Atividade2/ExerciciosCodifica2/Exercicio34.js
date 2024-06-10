/**
Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
 */

let matriz = [];

for (let i = 0; i < 50; i++) {
    matriz[i] = [];
    for (let j = 0; j < 50; j++) {
        matriz[i][j] = Math.round(Math.random() * 10);
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz Original:")
for (let i = 0; i < 50; i++) {
    console.log(matriz[i].join(' '));
}

for (let i = 0; i < 50; i++) {
    elementoDiagonalPrincipal = matriz[i][i]
    for (let j = 0; j < 50; j++) {
        matriz[i][j] = elementoDiagonalPrincipal * matriz[i][j]
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz Modificada:")
for (let i = 0; i < 50; i++) {
    console.log(matriz[i].join(' '));
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")