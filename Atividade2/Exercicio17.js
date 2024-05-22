/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require('prompt-sync')();
let vetorNomes = [];
let vetorIdades = []

function cadastrarNomeIdade(vetordeNomes,vetordeIdades){
    for (i = 1;i<=3;i++){
        let nome = prompt(`Digite o ${i}º nome:`)
        let idade = prompt(`Digite o ${i}º idade:`)
        vetordeNomes.push(nome)
        vetordeIdades.push(idade)
    } 
}

function imprimirMenoresIdade(vetordeNomes,vetordeIdades){
    for (i = 0;i <= vetordeIdades.length;i++){
        if(vetordeIdades[i] < 18){
            console.log(`O/A ${vetordeNomes[i]} é menor idade, ele/ela tem apenas ${vetordeIdades[i]}`)
        }
    }
}

cadastrarNomeIdade(vetorNomes,vetorIdades)
imprimirMenoresIdade(vetorNomes,vetorIdades)