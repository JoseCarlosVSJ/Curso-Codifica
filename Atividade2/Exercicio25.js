/**
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
 */

let matriz = [];
for (let i = 0; i < 15; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = Math.random() * 100;
    }
}

let somaColunas = Array(20).fill(0);

for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 15; i++) {
        somaColunas[j] += matriz[i][j];
    }
}


for (let j = 0; j < 20; j++) {
    console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}
