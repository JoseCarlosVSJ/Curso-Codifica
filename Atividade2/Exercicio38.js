/**
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require('prompt-sync')();

function gerarVetor(){
    let vetor = []
    for (let i = 0; i < 6; i++) {
        vetor[i] = parseInt(prompt(`Digite o valor da posição ${i + 1}:`));
    }
    return vetor
}

vetor = gerarVetor();

let manter = true
while (manter == true){
    console.log(" 1- soma dos elementos \n 2- produto dos elementos \n 3- média dos elementos \n 4- ordene os elementos em ordem crescente \n 5- mostre o vetor \n 0 - Sair")
    opcao = parseInt(prompt(`Digite a opção desejada:`));
    
    if(opcao === 1){
        let soma = 0
        vetor.forEach(element => {
            soma += element
        });
        console.log(soma)
    }
    else if(opcao === 2){
        let produto = 1
        vetor.forEach(element => {
            produto *= element
        });
        console.log(produto)
    }
    else if(opcao === 3){
        let produto = 1
        vetor.forEach(element => {
            produto *= element
        });
        console.log(produto/6)
    }
    else if(opcao === 4){
        vetor.sort()
    }
    else if(opcao === 5){
        console.log(vetor.toString())
    }
    else if(opcao === 0){
        manter = false
    }
    else{
        console.log("Digite uma opção válida")
    }
}
