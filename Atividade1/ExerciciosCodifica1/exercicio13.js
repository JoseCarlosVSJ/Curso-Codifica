const prompt = require('prompt-sync')();


for (let i = 0; i < 5;i ++){
    let num = parseInt(prompt("Insira o número para realizar a tabuada: "));
    
    for (let cont = 1;cont <= num;cont++){
        console.log(`${num} * ${cont}  = ${num*cont}`)
    }
}