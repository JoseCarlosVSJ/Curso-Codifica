/**
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
 */let matriz = [];
for (let i = 0; i < 15; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = Math.round(Math.random() * 100);
    }
}

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < 15; i++) {
    console.log(matriz[i].join(' '));
}

for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
        somaAcimaDiagonal += matriz[i][j];
    }
}

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        somaAbaixoDiagonal += matriz[i][j];
    }
}

console.log("Soma dos elementos acima da diagonal principal:", somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixoDiagonal);