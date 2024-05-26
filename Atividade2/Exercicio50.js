/**
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
*/

function hotel(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
}

function reserva(idReserva, idHotel, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
}

const prompt = require('prompt-sync')();
let hoteis = [];
let reservas = [];

function adicionarHotel(id, nome, cidade, quartosTotais) {
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].id === id) {
            console.log('Hotel com esse ID já existe.');
            return;
        }
    }
    let novoHotel = new hotel(id, nome, cidade, quartosTotais);
    hoteis.push(novoHotel);
    console.log('Hotel adicionado:', novoHotel);
}

function buscarHoteisPorCidade(cidade) {
    let encontrados = [];
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].cidade === cidade) {
            encontrados.push(hoteis[i]);
        }
    }
    console.log('Hotéis em', cidade, ':', encontrados);
}

function fazerReserva(idReserva, idHotel, nomeCliente) {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].idReserva === idReserva) {
            console.log('Reserva com esse ID já existe.');
            return;
        }
    }
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].id === idHotel) {
            if (hoteis[i].quartosDisponiveis > 0) {
                hoteis[i].quartosDisponiveis--;
                let novaReserva = new reserva(idReserva, idHotel, nomeCliente);
                reservas.push(novaReserva);
                console.log('Reserva feita:', novaReserva);
            } else {
                console.log('Não há quartos disponíveis.');
            }
            return;
        }
    }
    console.log('Hotel não encontrado.');
}

function cancelarReserva(idReserva) {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].idReserva === idReserva) {
            for (let j = 0; j < hoteis.length; j++) {
                if (hoteis[j].id === reservas[i].idHotel) {
                    hoteis[j].quartosDisponiveis++;
                    reservas.splice(i, 1);
                    console.log('Reserva cancelada.');
                    return;
                }
            }
        }
    }
    console.log('Reserva não encontrada.');
}

function listarReservas() {
    console.log('Reservas:', reservas);
}


let opcao;
do {
    console.log('\nMenu:');
    console.log('1. Adicionar Hotel');
    console.log('2. Buscar Hotéis por Cidade');
    console.log('3. Fazer Reserva');
    console.log('4. Cancelar Reserva');
    console.log('5. Listar Reservas');
    console.log('0. Sair');
    opcao = parseInt(prompt('Escolha uma opção:'));

        switch (opcao) {
            case 1:
            let id = parseInt(prompt('ID do Hotel:'));
            let nome = prompt('Nome do Hotel:');
            let cidade = prompt('Cidade do Hotel:');
            let quartosTotais = parseInt(prompt('Número total de quartos:'));
            adicionarHotel(id, nome, cidade, quartosTotais);
            break;
            case 2:
            let cidades = prompt('Cidade:');
            buscarHoteisPorCidade(cidades);
            break;
            case 3:
            let idReserva = parseInt(prompt('ID da Reserva:'));
            let idHotel = parseInt(prompt('ID do Hotel:'));
            let nomeCliente = prompt('Nome do Cliente:');
            fazerReserva(idReserva, idHotel, nomeCliente);
            break;
        case 4:
            let idDaReserva = parseInt(prompt('ID da Reserva a cancelar:'));
            cancelarReserva(idDaReserva);
            break;
        case 5:
            listarReservas();
            break;
        case 0:
            console.log('Fim do programa!');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
    }
} while (opcao !== 0);
