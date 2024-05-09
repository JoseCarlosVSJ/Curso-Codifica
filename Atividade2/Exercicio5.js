/**
 * Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
 */

const prompt = require('prompt-sync')();

jogadaComputador = valorInteiro();
jogadaUsuario = selecionarJogada();
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
console.log(`O usuário jogou ${jogadaUsuario} e o computador jogou ${jogadaComputador},logo:`)
selecionarVencedor(jogadaUsuario,jogadaComputador);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")


function valorInteiro() {
    min = 0;
    max = 2;
    return (Math.floor(Math.random() * (max - min) + min))
}

function selecionarJogada() {
    let jogadaUsuario

    do {
        console.log("0 - Pedra \n 1 - Papel \n 2 - Tesoura");
        console.log("Digite a sua jogada:");
        let entrada = prompt("");
        jogadaUsuario = parseInt(entrada);
        console.log(jogadaUsuario);
        if (jogadaUsuario > 2 || jogadaUsuario < 0 ){
            console.log("Numero invalido, tente novamente!")
        }
    } while (jogadaUsuario > 2 || jogadaUsuario < 0);

    return jogadaUsuario;
}

function selecionarVencedor(jogadaUsuario,jogadaComputador){
    if (jogadaUsuario == 0 && jogadaComputador == 2){
        console.log("Você venceu!")
    }
    else if(jogadaUsuario == 1 && jogadaComputador == 2){
        console.log("Você perdeu!")
    }
    else if(jogadaUsuario == 2 && jogadaComputador == 1){
        console.log("Você venceu!")
    }
    else if(jogadaUsuario == 1 && jogadaComputador == 0){
        console.log("Você venceu!")
    }
    else if(jogadaUsuario == jogadaComputador){
        console.log("Empate!")
    }
    else if(jogadaUsuario == 0 && jogadaComputador == 1){
        console.log("Você Perdeu!")
    }
    else if(jogadaUsuario == 2 && jogadaComputador == 0){
        console.log("Você Perdeu!")
    }
    else{
        console.log("Erro")
    }
}