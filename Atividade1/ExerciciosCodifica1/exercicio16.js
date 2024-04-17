// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

const prompt = require('prompt-sync')();

let cont = 0;
let num = 100;

while (cont < 50) {
    let primo = true;
    let divisor = 2;
    
    while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) {
            primo = false;
            break;
        }
        divisor++;
    }
    
    if (primo) {
        console.log(num);
        cont++;
    }
    num++;
}
