class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    retornarProfissao(){
        return this.profissao
    }

    alterarProfissao(novaProfissao){
        this.profissao = novaProfissao
        return this.retornarProfissao()
    }
}

let newPessoa = new Pessoa("Everton", 25, "Professor")