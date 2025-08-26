class Usuario {
    #ativo
    static totalUsuarios
    constructor(nome,idade,email){
        this.nome=nome
        this.idade=idade
        this.email=email
    }
    get ativo(){
        return this.#ativo
    }
    set ativo(valor) {
        this.#ativo=valor
    }
    bemVindo() {
        console.log(`Bem-vindo,${this.nome}!`)
    }
    mostrarDados(){
        console.log(`
            nome: ${this.nome}
            idade: ${this.idade}
            email: ${this.email}
            Ativo: ${this.#ativo}
            ==========================
        `)
    }
    totalUsuarios(){
        
    }
}