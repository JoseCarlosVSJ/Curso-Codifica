/**
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

let M = [
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [13, 2, 5, 4, -5, 6, 9, 8],
    [9, -10, 11, -12, 13, 26, 15, -16],
    [-17, 18, -19, 20, 32, 22, -23, 24],
    [25, -26, 27, -28, 29, -30, 31, -32],
    [-33, 34, -35, 36, 39, 38, 101, 40]
];


for (let i = 0; i < M.length; i++) {
    let contarNegativos = 0;
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            contarNegativos++;
        }
    }
    console.log(`Na linha ${i+1}º tem ${contarNegativos} numeros negativos`)
}

