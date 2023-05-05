// let usuarios = [
//     {
//         nome: "Everton",
//         idade: 25,
//         CNH: true
//     },
//     {
//         nome: "Guilherme",
//         idade: 20,
//         CNH: false
//     },
//     {
//         nome: "Douglas",
//         idade: 20,
//         CNH: false
//     },
// ]

// function remover() {
//     let pesquisaNome = prompt("Digite o nome de busca: ")

//     let indexConsulta = usuarios.findIndex(usuario => usuario.nome == pesquisaNome)

//     if (indexConsulta >= 0) {
//         usuarios.splice(indexConsulta, 1);
//         console.log("Usuario removido com sucesso!");
//     } else {
//         console.log("Usuario não encontrado");
//     }
// }

// function inserir() {
//     let nome = "Everton"
//     let idade = 25
//     let CNH = true

//     let usuario = {
//         idade,
//         CNH
//     }

//     usuarios.push(usuario)

// }

// function mostrar() {
//     usuarios.map(usuario => {
//         console.log(usuario.nome);
//     })
// }

class Carrinho {

    constructor(paramFrete){
        this.produtos = []
        this.frete = paramFrete
        this.subtotal = 0
        this.total = 0
    }

    adicionarProduto(nome, qtd, preco){
        this.produtos.push({
            nome,
            qtd,
            preco
        })
        this.calcularSubTotal()
    }

    calcularSubTotal(){
        this.subtotal = 0
        this.produtos.map(produto => {
            this.subtotal += produto.qtd * produto.preco
        })
        this.calcularTotal()
    }

    calcularTotal(){
        this.total = this.subtotal + this.frete
    }

    exibirTotal(){
        return {
            status: 200,
            msg: "Retornado com sucesso!",
            data: [
                this.total
            ]
        }
    }

}

let meuCarrinho = new Carrinho(8)

