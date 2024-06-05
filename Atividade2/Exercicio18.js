/**
Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
 */

class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

let f1 = new Funcionario("Jose","Desenvolvedor",10000)


console.log("Caracteristicas do funcionario:")
for (const key in f1) {
    if (Object.hasOwnProperty.call(f1, key)) {
        const element = f1[key];
        console.log(element)
    }
}