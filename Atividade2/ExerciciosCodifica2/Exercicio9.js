/**
 * 
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.

 */


const prompt = require('prompt-sync')();
calcularTotalSalarios();

function calcularTotalSalarios() {
    let somatorioMasculino = 0;
    let somatorioFeminino = 0;

    while (true) {
        let salario = parseFloat(prompt("Digite o salário do funcionário:"));
        let sexo;

        do {
            sexo = prompt("Digite M para o sexo masculino e F para o sexo feminino:").toUpperCase();
        } while (sexo !== "M" && sexo !== "F");

        if (sexo === "M") {
            somatorioMasculino += salario;
        } else if (sexo === "F") {
            somatorioFeminino += salario;
        }

        let continuar = prompt("Você deseja continuar? Digite S para sim ou N para não:").toUpperCase();
        if (continuar !== "S") {
            break;
        }
    }

    console.log(`Total de salários pagos aos homens: R$ ${somatorioMasculino}`);
    console.log(`Total de salários pagos às mulheres: R$ ${somatorioFeminino}`);
}