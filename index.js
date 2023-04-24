// var nome = "Everton"

// let nome = "Everton"
// const pi = 3.14
// let maior = true

// nome = "Figueiredo"
// pi = 3

// = atribui o valor a variável
// let nome = "Everton"

// == Comparação de valores
// nome == "Everton" -> true
// nome == "Ewerton" -> false

// === Comparação de valores e de tipos
// 1 === "1" -> false
// 1 === 1 -> true

// ! ela inverte a comparação 
// nome != "Everton" -> false 
// nome != "Ewerton" -> true

// let nome = "Rafael"

// let valor1 = 10
// let valor2 = 20
// let resultado = valor1 * valor2

// console.log("Meu nome é " + nome + " e tenho 20 anos");

// var pratoDoDia = "Lasanha"
// var precoPratoDoDia = 24.90
// var frete = 13.89
// var cliente = "Everton"

// var resultado = precoPratoDoDia + frete

// console.log("O total do pedido do " + cliente + " foi de: " + resultado);
// console.log(`O total do pedido do ${cliente} foi de: ${precoPratoDoDia + frete}`);

// < 
// 2 < 5 -> true
// >
// 2 > 5 -> false
// <=
// 2 <= 2 -> true
// >=
// 3 >= 1 -> true

// console.log(10 >= 100);
// console.log(0 < 1000);
// console.log(888 == 889);
// console.log(20 <= 20);
// console.log(77 == "77");
// console.log(77 === "77");

// let nome = prompt("Qual o seu nome?")
// let idade = prompt("Qual a sua idade?")

// if (idade >= 18) {
//     console.log(`${nome} você é maior de idade`);

// }else{
//     if (idade === null) {
//         console.log("Valor não informado");
//     }else{
//         console.log(`${nome} você é menor de idade`);
//     }
// }


const resposta1 = prompt("Você gosta de video games?")
if (resposta1 === "não") {
    console.log("Compre um pc");
}else{
    const resposta2 = prompt("Você tem amigos?")
    if (resposta2 === "não") {
        console.log("Compre um ps3");
    }else{
        const resposta3 = prompt("Amigos reais ou virtuais?")
        if (resposta3 === "reais") {
            console.log("Compre um wii");
        } else {
            console.log("Compre um xbox");
        }
    }
}