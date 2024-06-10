/**
Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
 */
const prompt = require('prompt-sync')();
let horarios = [];

for (let i = 0; i < 5; i++) {
    let horarioValido = false;

    while (!horarioValido) {
        let horario = prompt(`Digite o ${i + 1}º horário no formato HH:MM:SS:`);

        const regex = /^([01]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9]$/;

        if (regex.test(horario)) {
            horarioValido = true;
            const horarioFormatado = horario.replace(/:/g, '.');
            horarios.push(horarioFormatado);
        } else {
            console.log("Horário inválido. Por favor, digite no formato HH:MM:SS.");
        }
    }
}

console.log("Horários formatados:");
horarios.forEach(horario => console.log(horario));
