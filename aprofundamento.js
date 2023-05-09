// Como colocar uma msg no console
// console.log("Mensagem no console");

// Criar uma caixa de alerta
// alert("Texto que vai aparecer")

// Criar uma caixa de input para o usuario digitar
// prompt("Pergunta a ser realizada")

// Pegar o valor do prompt e colocar em uma variavel
// let nome = prompt("Digite seu nome: ")

// Tomada de decisão 
// ----------
// IF e ELSE
// if (4 > 3) {
//     // Esse bloco vai executar se a condição do IF for verdadeira
//     console.log("Condição verdadeira");
// }else{
//     // Esse bloco vai executar se a condição do IF for falsa
//     console.log("Condição falsa");
// }
// ----------
// SWITCH CASE -> Usado para mais de um valor
// let numero = 3
// switch (numero) {
//     case 2:
//         // Se o valor de numero for igual a 2 esse bloco vai ser executado
//         console.log("Numero igual a 2");
//         break;

//     default:
//         // Esse bloco só é executado caso nenhuma condição tenha sido atendida
//         console.log("Não informado");
//         break;
// }

// Loops
// FOR
// for (let index = 0; index < 5; index++) {
    // console.log(`O numero do loop é ${index}`);
// }

// While -> precisa de uma condição para existir
// let numero = 0
// while (numero < 2) {
    // console.log(`O numero atual do while é ${numero}`);
    // console.log("O numero atual do while é " + numero);
    // numero++
// }

// ARRAY
// Cria o array usando []
// let produtos = []

// PUSH -> Inseri o registro na ultima posição
// produtos.push("Lapis")
// produtos.push("Borracha")
// produtos.push("Caneta")

// POP -> Remove o registro na ultima posição
// produtos.pop()

// Shift -> Remove o registro na primeira posição
// produtos.shift()

// Unshift -> Inseri o registro na primeira posição
// produtos.unshift("Caderno")

// Retonar o index do array
// let resultado = produtos.indexOf("Lapis")
// Se ele encontrar o elemento, retorna o index, se não encontrar retorna -1
// console.log(resultado);

// MAP
// produtos.map((produto) => {
//     console.log(produto);
// })

// --------------------------------
// Função MAP sem ARROW 
// function mapTeste(produto) {
//         console.log(produto);
// }

// produtos.map(mapTeste)

// FIND / FILTER 
// let resultado = produtos.find((produto) => produto === "Caderno")
// console.log(resultado);

// let carrinho = [
//     {
//         nome: "Lapis",
//         qtd: 2,
//         preco: 1.5
//     },
//     {
//         nome: "Borracha",
//         qtd: 3,
//         preco: 15
//     },
//     {
//         nome: "Caderno",
//         qtd: 2,
//         preco: 50
//     }
// ]

// let resultado = carrinho.filter((produto) => produto.preco > 5)

// Função que recebe um array com objetos que representa um produto
// function exibirProdutos(array) {
//     array.map((produto) => {
//         console.log(`Nome do Produto: ${produto.nome}`);
//         console.log(`Qtd do Produto: ${produto.qtd}`);
//         console.log(`Preço do Produto: ${produto.preco}`);
//         console.log("------------------");
//     })
// }

class Carrinho{
    constructor(){
        this.itens = []
        this.subtotal = 0
        this.entrega = 5
        this.impostos = 5
        this.total = 0
    }

    retornaCarrinho(){

        let carrinho = {
            itens: this.itens,
            subtotal: this.subtotal,
            impostos: this.impostos,
            entrega: this.entrega,
            total: this.total,
        }

        return carrinho
    }

    adicionaProduto(nome, qtd, preco){
        let produto = {
            sku: this.itens.length,
            nome,
            qtd,
            preco
        }

        this.itens.push(produto)

        return "Cadastrado com sucesso!"
    }

}

let carrinho = new Carrinho()
console.log(carrinho);
console.log(carrinho.retornaCarrinho());