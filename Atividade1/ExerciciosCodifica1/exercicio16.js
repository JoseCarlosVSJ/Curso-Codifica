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
