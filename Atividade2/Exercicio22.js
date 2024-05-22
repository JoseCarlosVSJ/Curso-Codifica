/**
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

const prompt = require('prompt-sync')();
let salarios = [];
let numFilhos = [];
let totalSalarios = 0;
let totalFilhos = 0;
let maiorSalario = 0;
let countSalarioAte350 = 0;
let continuar = 1;

while (continuar) {
    let salario = parseFloat(prompt("Digite o salário:"));
    let filhos = parseInt(prompt("Digite o número de filhos:"), 10);

    salarios.push(salario);
    numFilhos.push(filhos);
    totalSalarios += salario;
    totalFilhos += filhos;

    if (salario > maiorSalario) {
        maiorSalario = salario;
    }

    if (salario <= 350) {
        countSalarioAte350++;
    }

    continuar = parseInt(prompt("Deseja continuar? (1 - sim)"));
}

let mediaSalario = totalSalarios / salarios.length;
let mediaFilhos = totalFilhos / numFilhos.length;
let percentualSalarioAte350 = (countSalarioAte350 / salarios.length) * 100;

console.log("Média de salário da população: R$", mediaSalario.toFixed(2));
console.log("Média do número de filhos: ", mediaFilhos.toFixed(2));
console.log("Maior salário: R$", maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00: ", percentualSalarioAte350.toFixed(2), "%");