// let pessoas = ["Everton", "Jessica", "Anny", "Elias"]

// console.log(pessoas);

// for (let index = 0; index < pessoas.length; index++) {
// console.log(`${index} - ${pessoas[index]}`);
// }


// console.log("---------------------------");

// pessoas.push("Denis")

// for (let index = 0; index < pessoas.length; index++) {
// console.log(`${index} - ${pessoas[index]}`);
// }

// console.log("---------------------------");

// pessoas.pop()

// for (let index = 0; index < pessoas.length; index++) {
// console.log(`${index} - ${pessoas[index]}`);
// }

// console.log("---------------------------");

// pessoas.unshift("Natalia")

// for (let index = 0; index < pessoas.length; index++) {
// console.log(`${index} - ${pessoas[index]}`);
// }

// console.log("---------------------------");

// pessoas.shift()

// for (let index = 0; index < pessoas.length; index++) {
//     console.log(`${index} - ${pessoas[index]}`);
// }

// console.log("---------------------------");

// Mostra o intervalo entre o primeiro parametro e o segundo parametro
// console.log(pessoas.slice(1,3));

// console.log(pessoas);

// console.log("---------------------------");

// Modifica o array
// pessoas.splice(1,1)
// pessoas.splice(2,1)

// console.log(pessoas);

// let nome = "Anny"

// let resultado = pessoas.indexOf(nome)

// console.log(resultado);

// if (resultado === -1) {
//     console.log("Pessoa não encontrada");
// }else{
//     pessoas.splice(resultado, 1)
// }

// console.log(pessoas);

// let produtos = []

// for (let index = 0; index < 5; index++) {
//     let nome = prompt("Qual o produto?")

//     produtos.push(nome)
// }

// console.log(produtos);

// OBJETO

// let produto = {
//     preco: 1.5,
//     qtd: 2,
//     nome: "Lapis"
// }

// console.log(produto.qtd);

let carrinho = []

for (let index = 0; index < 2; index++) {
    let nome = prompt(`${index} - Qual o nome do seu produto?`)
    let preco = prompt(`${index} - Qual o preco do seu produto?`)
    let qtd = prompt(`${index} - Qual a qtd do seu produto?`)
    let total = preco * qtd

    let produto = {
        nome,
        preco,
        qtd,
        total
    }

    // parseFloat() -> DICA TEXTO EM NUMERO COM VIRGULA
    // parseINT() -> DICA TEXTO EM NUMERO INTEIRO

    carrinho.push(produto)
}

for (let index = 0; index < carrinho.length; index++) {
   console.log(`Nome: ${carrinho[index].nome}`);    
   console.log(`Preco: ${carrinho[index].preco}`);    
   console.log(`Qtd: ${carrinho[index].qtd}`);    
   console.log(`Total: ${carrinho[index].total}`);    
   console.log(`--------------------------`);    
}