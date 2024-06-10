/**
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
 */
const prompt = require('prompt-sync')();
function pesoIdeal(altura,sexo){
    if (sexo === 1){
        pesoIdeal = 72.7 * altura - 58
    }
    else{
        pesoIdeal = 62.1 * altura - 44.7
    }
    return pesoIdeal
}

let altura = prompt(`Digite a altura desejada:`)
let sexo = 3

while (sexo !== 1 && sexo !== 2) {
    sexo = parseInt(prompt('Digite o sexo desejado: 1 - Masculino / 2 - Feminino'), 10);

    if (sexo !== 1 && sexo !== 2) {
        console.log("Entrada inválida. Por favor, digite 1 para Masculino ou 2 para Feminino.");
    }
}

pesoIdeal = pesoIdeal(altura,sexo)
console.log(`O peso ideal para a altura ${altura} do sexo ${sexo == 1 ? "Masculino" : "Feminino"} é ${pesoIdeal}`)