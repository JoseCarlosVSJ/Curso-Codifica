/*
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/
let matriz = []

for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    for (let j = 0; j < 13; j++) {
        matriz[i][j] = Math.round(Math.random() * 100);
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Matriz Inicial:")
for (let i = 0; i < 5; i++) {
    console.log(matriz[i].join(' '));
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")

let matrizModificada = [];

for (let i = 0; i < 12; i++) {
    let maiorModulo = Math.abs(matriz[i][0]);
    for (let j = 1; j < 13; j++) {
        if (Math.abs(matriz[i][j]) > maiorModulo) {
            maiorModulo = matriz[i][j];
        }
    }

    matrizModificada[i] = [];
    for (let j = 0; j < 13; j++) {
        matrizModificada[i][j] = matriz[i][j] / maiorModulo;
    }
}


console.log("Matriz Modificada:")
for (let i = 0; i < 5; i++) {
    console.log(matrizModificada[i].join(' '));
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")