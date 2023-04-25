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

let nome = ["Everton","Bea","Guilherme"]

// console.log(nome);

// for (let index = 0; index < nome.length; index++) {
//     console.log(nome[index]);
// }

let controler = true

while (controler) {

    let idade = prompt("Qual sua idade?")

    if (idade >= 18) {
        console.log("Você é maior de idade");
        controler = false
    }else{
        console.log("Informe uma idade maior que 17");
    }
}