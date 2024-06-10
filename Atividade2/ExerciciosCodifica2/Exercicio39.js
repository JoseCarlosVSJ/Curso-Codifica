/**
Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

function gerarVetorAleatorio(){
    let vetor = []
    for (let i = 0; i < 100; i++) {
        if(Math.random() < 0.13){
            vetor[i] = Math.round((Math.random() * 100)*-1)
        }
        else if(Math.random() > 0.9){
            vetor[i] = ""
        }
        else{
            vetor[i] = Math.round(Math.random() * 100)
        }
        
    }
    return vetor
}

function limparVetor(vetor){
    
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Vetor Inicial:")
vetor = gerarVetorAleatorio()

console.log(vetor.toString())

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log("Vetor Alterado:")
vetor = vetor.filter(elem => elem > 0);
vetor = vetor.filter(elem => elem != "");
console.log(vetor.toString())