// Usando o projeto Node.js + Typescript configurado acima, realize os
// seguintes exercícios:
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

let aprovado:boolean

function media(nota1:number, nota2:number){
    const media = (nota1+nota2)/2;

    if(media>=6){
        aprovado = true;
        console.log(`Sua média é ${media}, você foi aprovado!`)
        
    } else {
        aprovado = false    
        console.log(`Sua média é ${media}, você foi reprovado!`);
    }
}

media(6,8);

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface Objeto {
    nota1: number,
    peso1: number,
    nota2: number,
    peso2: number,
    nota3: number,
    peso3: number
}

const objeto:Objeto = {
    nota1: 5,
    peso1: 2,
    nota2: 10,
    peso2: 1,
    nota3: 8,
    peso3: 3
}

function mediaPonderada(notas:Objeto){
    const lista1 = ((notas.nota1*notas.peso1) + (notas.nota2*notas.peso2))/2;
    const lista2 = ((notas.nota1*notas.peso1) + (notas.nota2*notas.peso2)+(notas.nota3*notas.nota3))/3;

    console.log(lista1);
    console.log(lista2);
}

mediaPonderada(objeto);

// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

interface Carteira {
    saldo: number,
    entradas: number,
    saidas: number
}

const carteira:Carteira ={
    saldo: 1000,
    entradas: 100,
    saidas: 1800,
}

function transacoes(carteira:Carteira){
    carteira.saldo += carteira.entradas;
    console.log(carteira.saldo);

    if (carteira.saidas>carteira.saldo){
        console.log("Você não possui saldo suficiente!");
        
    } else {
        carteira.saldo -= carteira.saidas;
        console.log(carteira.saldo);
    }
}

transacoes(carteira);

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

type Produto = {
    nome:string,
    preco:number,
};

const produtos:Produto[] = [];

function cadastrar(nome:string, preco:number){
    const novoProduto:Produto = {
        nome: nome,
        preco: preco
    }

    produtos.push(novoProduto);
};

cadastrar("arroz", 5);
cadastrar("feijao", 3);

console.log(produtos);

function atualizarProduto(nome:string){
    const indice = produtos.findIndex((produto) =>{
        return nome === produto.nome;
    });
    if (indice!== -1){
        produtos[indice].nome = "abobora";
        produtos[indice].preco = 10;
        console.log(produtos);
    } else {
        console.log("produto nao encontrado para atualizar");
        
}
}

atualizarProduto("arroz")

function deletarProduto(nome:string){
    const indice = produtos.findIndex((produto) =>{
        return nome === produto.nome;
    });

    if (indice !== -1){
        produtos.splice(indice, 1);
        console.log(produtos);
    } else {
        console.log("Produto não existe");
    }
}

deletarProduto("feijao");

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

type User = {
    nome:string,
    idade:number,
    ocupacao:string,
    salario:string
}

const usuario:User = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: "R$ 1000",
}

function infos(usuario:User) {
    if (usuario.salario === ""){
        usuario.salario = "N/A"
        console.log(`${usuario.nome}, ${usuario.idade}, ${usuario.ocupacao}, ${usuario.salario}`);
    }else{
        console.log(`${usuario.nome}, ${usuario.idade}, ${usuario.ocupacao}, ${usuario.salario}`)
}
}

infos(usuario);

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

type Diretor = {
    nome: string,
    idade: number,
    salario: string,
    comissionamento: number
}

const diretor:Diretor = {
    nome: "Marcelo",
    idade: 34,
    salario: "R$ 10.000",
    comissionamento: 20
}

function mostrarDiretor(diretor:Diretor){
    console.log(diretor)
}

mostrarDiretor(diretor);

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

type UserOrDiretor = User | Diretor;

const lista:UserOrDiretor[] = [
    {
        nome: "Marcelo",
        idade: 34,
        salario: "R$ 10.000",
        comissionamento: 20
    },
    {
        nome: "Daphne",
        idade: 23,
        ocupacao: "analista de TI",
        salario: "R$ 1000",
    },
    {
        nome: "Jorge",
        idade: 37,
        ocupacao: "analista de TI",
        salario: "R$ 2000",
    }
];

function imprimir(lista:UserOrDiretor[]){
    lista.forEach(pessoa => {
        if ("comissionamento" in pessoa){
            mostrarDiretor(pessoa);
        } else {
            infos(pessoa);
        }
    });
};

imprimir(lista);