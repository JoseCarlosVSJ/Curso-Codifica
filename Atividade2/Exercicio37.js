/**
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

gabarito = [];
matrizAlunos = [];

function gerarVetorAleatorio(){
    let vetor = []
    for (let i = 0; i < 20; i++) {
        vetor[i] = Math.round(Math.random() * 3);
        if(vetor[i] == 0){
            vetor[i] = "A"
        }
        else if(vetor[i] == 1){
            vetor[i] = "B"
        }
        else if(vetor[i] == 2){
            vetor[i] = "C"
        }
        else if(vetor[i] == 3){
            vetor[i] = "D"
        }
    }
    return vetor
}

gabarito = gerarVetorAleatorio()

for (let i = 0; i < 50; i++) {
    let aluno = {
        matricula: i + 1,
        respostas: gerarVetorAleatorio()
    };
    matrizAlunos.push(aluno);
}

matrizAlunos.forEach(aluno => {
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
        if (aluno.respostas[i] === gabarito[i]) {
            acertos++;
        }
    }
    if (acertos >= 12) {
        console.log(`O aluno ${aluno.matricula} foi aprovado com ${acertos} pontos`);
    }
    else{
        console.log(`O aluno ${aluno.matricula} foi reprovado com ${acertos} pontos`);
    }
});

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")



console.log(`O gabarito era ${gabarito.toString()}`)