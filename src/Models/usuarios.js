module.exports = class Usuario {
    
    constructor(nome, email, senha) {
        this._nome = nome
        this._email = email
        this._senha = senha
        console.log(this._nome)
    }};
