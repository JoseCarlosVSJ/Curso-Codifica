/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". 
*/
vetorResultado = [];
matrizApostadores = [];

function gerarVetorAleatorio(){
    let vetor = []
    for (let i = 0; i < 13; i++) {
        vetor[i] = Math.round(Math.random() * 10);
    }
    return vetor
}

vetorResultado = gerarVetorAleatorio()

for (let i = 0; i < 100; i++) {
    let apostador = {
        codApostador: i + 1,
        respostas: gerarVetorAleatorio()
    };
    matrizApostadores.push(apostador);
}

matrizApostadores.forEach(apostador => {
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
        if (apostador.respostas[i] === vetorResultado[i]) {
            acertos++;
        }
    }
    console.log(`Apostador ${apostador.codApostador} teve ${acertos} acertos`);
    if (acertos === 13) {
        console.log(`Parabéns, tu foi o GANHADOR. Jogador de número ${apostador.codApostador}`);
    }
});

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")



console.log(`O resultado era ${vetorResultado.toString()}`)