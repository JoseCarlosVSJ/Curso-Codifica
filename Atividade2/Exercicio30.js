/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

let matriz = [];
let sl = [];
let sc = [];

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
    let soma = 0;
        for(let j = 0; j < 5;j++){
            soma += matriz[i][j]
        }
    sl.push(soma)
}

for (let j = 0; j < 5; j++) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][j];
    }
    sc.push(soma)
}

console.log(sl)
console.log(sc)