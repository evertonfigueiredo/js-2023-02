function alterar() {
    let tituloH1 = document.querySelector("#titulo")
    let textoInput = document.querySelector("#textoInput")
    tituloH1.innerHTML = textoInput.value
}

function adicionarUsuario() {
    // Pegando todos os elementos que vou utilizar que já estão criados
    let usuarioInput = document.querySelector("#usuarioInput")
    let usuarios = document.querySelector("#usuarios")

    // Criar um novo elemento e inserir o valor do input dentro dele
    let usuario = document.createElement("p")
    usuario.setAttribute("id", "conteudoDoAtributo")
    usuario.innerHTML = usuarioInput.value

    // Inserindo o elemento criado na div selecionada
    usuarios.appendChild(usuario)
    usuarioInput.value = ''
}

function limparUsuarios() {
    let usuarios = document.querySelector("#usuarios")
    // Remove o ultimo filho
    usuarios.removeChild(usuarios.lastChild)

    // Remove o primeiro filho
    // usuarios.removeChild(usuarios.firstChild)

    // if(usuarios.parentNode){
    //     usuarios.parentNode.removeChild(usuarios);
    // }
}