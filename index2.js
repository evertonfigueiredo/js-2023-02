// let idade = prompt("Qual é sua idade?")

// console.log(idade);

// if (idade >= 18) {
//     alert("Você é maior de idade")
// } else {
//     alert("Você é menor de idade")
// }

// let dia = prompt("Qual o dia da semana?")

// switch (dia) {
//     case "0":
//         alert("Hoje é Domingo")
//         break;

//     case "1":
//         alert("Hoje é Segunda")
//         break;

//     case "2":
//         alert("Hoje é Terça")
//         break;

//     case "3":
//         alert("Hoje é Quarta")
//         break;

//     case "4":
//         alert("Hoje é Quinta")
//         break;

//     case "5":
//         alert("Hoje é Sexta")
//         break;

//     case "6":
//         alert("Hoje é Sábado")
//         break;

//     default:
//         alert("Dia não existente!")
//         break;
// }

// let nome1 = "Everton"
// let nome2 = "Bea"
// let nome3 = "Guilherme"
// let nome4 = "Lazaro"

// let nome = ["Everton", "Bea", "Guilherme"]

// console.log(nome);

// for (let index = 0; index < nome.length; index++) {
//     console.log(nome[index]);
// }

// let controler = true

// while (controler) {

//     let idade = prompt("Qual sua idade?")

//     if (idade >= 18) {
//         console.log("Você é maior de idade");
//         controler = false
//     }else{
//         console.log("Informe uma idade maior que 17");
//     }
// }

// ----------------------------------------
//  Atividade Slide 1

// for (let index = 0; index < 101; index++) {

//     // let resultado = index % 2;
//     // if (resultado == 0) {
//     //     console.log(index);
//     // }

//     if ((index % 2) == 0) {
//         console.log(index);
//     }
// }

// ------------

// for (let index = 0; index < 101; index++) {

//     // let resultado = index % 2;
//     // if (resultado == 1) {
//     //     console.log(index);
//     // }

//     if ((index % 2) == 1) {
//         console.log(index);
//     }
// }

// ------------

// let numero = 500

// if (numero > 1) {
//     for (let index = 0; index <= numero; index++) {
//         console.log(index);
//     }
// }

// ------------

// let numero = 60

// for (let index = 0; index < numero; index++) {

//     let resultado = index % 5; 

//     if (resultado !== 0) {
//         console.log(index);
//     }

// }

// -----------

// let controler = true

// while (controler) {

//     let nota = prompt("Informe uma nota:")

//     if (nota >= 0 && nota <= 10) {
//         console.log("A nota é valida");
//         controler = false
//     }else{
//         console.log("Nota invalida");
//     }

// }

// Atividade slide 2
let controle = true

while (controle) {
    let nome = prompt("Digite o seu nome:")
    let senha = prompt("Digite sua senha: ")

    if (nome === senha) {
        console.log("Erro: Senha e Nome iguais");
    } else {
        console.log("Usuario cadastrado");
        controle = false
    }
}
