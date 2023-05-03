// function mostrarDados(nome, idade) {
//     if (nome !== undefined) {
//         console.log(`Seu nome é: ${nome}`);
//     } else {
//         console.log(`Seu nome não é valido.`);
//         return false
//     }

//     if (idade !== undefined) {
//         console.log(`Sua idade é: ${idade}`);
//     } else {
//         console.log(`Sua idade não é valida.`);
//         return false
//     }

//     return true

// }

// function mostrarInfo(num1, num2) {
//     console.log(`A soma dos dois numeros é: ${num1 + num2}`);

// }

// function pegarDados(funcao) {
//     let nome = prompt("Qual o seu nome: ")
//     let idade = prompt("Qual a sua idade: ")

//     funcao(nome,idade)
// }

// pegarDados(mostrarDados)

// function somaQtd() {
//     let totalItens = 0;

//     for (let index = 0; index < carrinho.itens.length; index++) {
//         totalItens += carrinho.itens[index].qtd        
//     }

//     return totalItens;

// }

// function somaPreco() {
//     let totalPreco = 0;

//     for (let index = 0; index < carrinho.itens.length; index++) {
//         totalPreco += carrinho.itens[index].preco        
//     }

//     return totalPreco;

// }


// let carrinho = {
//     itens: [
//         {
//             nome: "Produto 1",
//             qtd: 2,
//             preco: 80.0
//         },
//         {
//             nome: "Produto 2",
//             qtd: 25,
//             preco: 50.0
//         },
//         {
//             nome: "Produto 3",
//             qtd: 3,
//             preco: 40.0
//         }
//     ],
//     subtotal: 100.00,
//     entrega: 30.0,
//     imposto: 7.0,
//     total: 137.0
// }

// function soma() {
//     let total = 0

//     carrinho.itens.map((item) => {
//         total += item.preco
//     })

//    return total
// }

// let retornoFilter = carrinho.itens.filter((item) => item.preco > 45)

// console.log(retornoFilter);

// let retornoFind = carrinho.itens.find((item) => item.nome == "Produto 2")

// console.log(retornoFind);


// let usuario = {
//     nome: "Everton"
// }

// usuario.idade = 20;

// console.log(usuario);

// delete usuario.nome

// console.log(usuario);

let carrinho = {
    itens: [
        {
            nome: "Produto 1",
            qtd: 2,
            preco: 80.0
        },
        {
            nome: "Produto 2",
            qtd: 25,
            preco: 50.0
        },
        {
            nome: "Produto 3",
            qtd: 3,
            preco: 40.0
        }
    ],
    subtotal: 100.00,
    entrega: 30.0,
    imposto: 7.0,
    total: 137.0
}

function soma() {
    let total = 0

    carrinho.itens.map((item) => {
        total += item.preco
    })

    return total
}

function inserir() {

    carrinho.itens.push({
        nome: "Produto 4",
        qtd: 4,
        preco: 30.0
    })

    console.log(carrinho.itens);
}

function retornaUltimo() {
    return carrinho.itens[carrinho.itens.length - 1];
}

function retornaPrimeiro() {
    return carrinho.itens[0];
}

function somaQtd() {
    let totalQtd = 0

    carrinho.itens.map((item) => {
        totalQtd += item.qtd
    })

    return totalQtd
}