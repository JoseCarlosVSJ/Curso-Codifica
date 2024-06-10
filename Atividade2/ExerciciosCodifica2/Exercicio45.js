/**
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

let arrayDeStrings = ["String1", "String2", "String1", "String2", "String1", "String3"];

let contagens = {};
for (let i = 0; i < arrayDeStrings.length; i++) {
    let string = arrayDeStrings[i];
    if (contagens[string]) {
        contagens[string]++;
    } else {
        contagens[string] = 1;
    }
}



console.log(contagens);