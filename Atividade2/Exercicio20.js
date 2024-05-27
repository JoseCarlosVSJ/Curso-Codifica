/**
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

function funcionario(matricula,nome, salarioBruto) {
    this.matricula = matricula;
    this.nome = nome;
    this.salarioBruto = salarioBruto;
}



let func1 = new funcionario (1,"Jose",3000)
let func2 = new funcionario (2,"Jacques",10000)
let func3 = new funcionario (3,"Joao",50000)
let func4 = new funcionario (4,"Carlos",2000)


let arrayFuncionarios = [func1,func2,func3,func4]

arrayFuncionarios.forEach(element => {
    calcularSalarioLiquido(element)
    console.log(element)
});


function calcularSalarioLiquido(obj){
    let deducaoINSS = (obj.salarioBruto * 0.12)
    let salarioLiquido = obj.salarioBruto - deducaoINSS;
    obj.deducaoINSS = deducaoINSS
    obj.salarioLiquido = salarioLiquido
}