function alterar() {
    let tituloH1 = document.querySelector("#titulo")
    let textoInput = document.querySelector("#textoInput")
    tituloH1.innerHTML = textoInput.value
}

// function adicionarUsuario() {
//     // Pegando todos os elementos que vou utilizar que já estão criados
//     let usuarioInput = document.querySelector("#usuarioInput")
//     let usuarios = document.querySelector("#usuarios")

//     // Criar um novo elemento e inserir o valor do input dentro dele
//     let usuario = document.createElement("p")
//     usuario.setAttribute("id", "conteudoDoAtributo")
//     usuario.innerHTML = usuarioInput.value

//     // Inserindo o elemento criado na div selecionada
//     usuarios.appendChild(usuario)
//     usuarioInput.value = ''
// }

// function limparUsuarios() {
//     let usuarios = document.querySelector("#usuarios")
//     // Remove o ultimo filho
//     usuarios.removeChild(usuarios.lastChild)

//     // Remove o primeiro filho
//     // usuarios.removeChild(usuarios.firstChild)

//     // if(usuarios.parentNode){
//     //     usuarios.parentNode.removeChild(usuarios);
//     // }
// }
// -------------------------
// Atividade1
// let p = document.createElement("p")
// p.innerHTML = "Texto"
// document.body.appendChild(p)
// -------------------------

let produtos = [
    { nome: "Produto 1", preco: 10, quantidade: 2},
    { nome: "Produto 2", preco: 20, quantidade: 1},
    { nome: "Produto 3", preco: 14, quantidade: 6},
]

function adicionarProdutos() {

    // Pego os inputs
    let nome = document.querySelector("#nome")
    let preco = document.querySelector("#preco")
    let quantidade = document.querySelector("#quantidade")

    // Criou um objeto com os valores dos inputs
    let produto = {
        nome: nome.value,
        preco: parseInt(preco.value),
        quantidade: parseInt(quantidade.value)
    }

    // Zero os valores dos inputs
    nome.value = ''
    preco.value = ''
    quantidade.value = ''

    // Adiciono o objeto ao array
    produtos.push(produto)
    exibirProdutos()
}

function exibirProdutos() {
    
    let divLista = document.querySelector("#lista")
    let ul = document.createElement("ul")
    ul.setAttribute("id", "listaDeProdutos")
    produtos.map((produto) => {
        let li = document.createElement("li")
        li.innerHTML = `${produto.nome} - Preço: ${produto.preco} - Quantidade: ${produto.quantidade}`
        ul.appendChild(li)
    });

    divLista.innerHTML = ""
    divLista.appendChild(ul)

}

exibirProdutos()