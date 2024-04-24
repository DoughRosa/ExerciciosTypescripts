"use strict";
// Usando o projeto Node.js + Typescript configurado acima, realize os
// seguintes exercícios:
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
let aprovado;
function media(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    if (media >= 6) {
        aprovado = true;
        console.log(`Sua média é ${media}, você foi aprovado!`);
    }
    else {
        aprovado = false;
        console.log(`Sua média é ${media}, você foi reprovado!`);
    }
}
media(6, 8);
const objeto = {
    nota1: 5,
    peso1: 2,
    nota2: 10,
    peso2: 1,
    nota3: 8,
    peso3: 3
};
function mediaPonderada(notas) {
    const lista1 = ((notas.nota1 * notas.peso1) + (notas.nota2 * notas.peso2)) / 2;
    const lista2 = ((notas.nota1 * notas.peso1) + (notas.nota2 * notas.peso2) + (notas.nota3 * notas.nota3)) / 3;
    console.log(lista1);
    console.log(lista2);
}
mediaPonderada(objeto);
const carteira = {
    saldo: 1000,
    entradas: 100,
    saidas: 1800,
};
function transacoes(carteira) {
    carteira.saldo += carteira.entradas;
    console.log(carteira.saldo);
    if (carteira.saidas > carteira.saldo) {
        console.log("Você não possui saldo suficiente!");
    }
    else {
        carteira.saldo -= carteira.saidas;
        console.log(carteira.saldo);
    }
}
transacoes(carteira);
const produtos = [];
function cadastrar(nome, preco) {
    const novoProduto = {
        nome: nome,
        preco: preco
    };
    produtos.push(novoProduto);
}
;
cadastrar("arroz", 5);
cadastrar("feijao", 3);
console.log(produtos);
function atualizarProduto(nome) {
    const indice = produtos.findIndex((produto) => {
        return nome === produto.nome;
    });
    if (indice !== -1) {
        produtos[indice].nome = "abobora";
        produtos[indice].preco = 10;
        console.log(produtos);
    }
    else {
        console.log("produto nao encontrado para atualizar");
    }
}
atualizarProduto("arroz");
function deletarProduto(nome) {
    const indice = produtos.findIndex((produto) => {
        return nome === produto.nome;
    });
    if (indice !== -1) {
        produtos.splice(indice, 1);
        console.log(produtos);
    }
    else {
        console.log("Produto não existe");
    }
}
deletarProduto("feijao");
const usuario = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: "R$ 1000",
};
function infos(usuario) {
    if (usuario.salario === "") {
        usuario.salario = "N/A";
        console.log(`${usuario.nome}, ${usuario.idade}, ${usuario.ocupacao}, ${usuario.salario}`);
    }
    else {
        console.log(`${usuario.nome}, ${usuario.idade}, ${usuario.ocupacao}, ${usuario.salario}`);
    }
}
infos(usuario);
const diretor = {
    nome: "Marcelo",
    idade: 34,
    salario: "R$ 10.000",
    comissionamento: 20
};
function mostrarDiretor(diretor) {
    console.log(diretor);
}
mostrarDiretor(diretor);
// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
console.log("////////////");
const lista = [
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
function imprimir(lista) {
    lista.forEach(pessoa => {
        if ("comissionamento" in pessoa) {
            mostrarDiretor(pessoa);
        }
        else {
            infos(pessoa);
        }
    });
}
;
imprimir(lista);
