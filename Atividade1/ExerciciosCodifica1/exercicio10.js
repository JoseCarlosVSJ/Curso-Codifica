const prompt = require('prompt-sync')();

let num = parseInt(prompt("Insira o número para ser repetido: "));

for (let i=0;i < 10;i++){
    console.log(num)
}
