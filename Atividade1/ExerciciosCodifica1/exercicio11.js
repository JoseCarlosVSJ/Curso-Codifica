const prompt = require('prompt-sync')();
let boleano = true

while(boleano === true){
    let num = parseInt(prompt("Insira o número para ser repetido: "));

    if (num > 0 && num !== null){
        if (num % 2 === 0){
            console.log("O número é par");
        }
        else{
            console.log("O número é impar");
        }}
    else{
        boleano = false;
    }
}