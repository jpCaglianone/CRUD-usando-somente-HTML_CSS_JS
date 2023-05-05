export class Usuario {
  constructor(nome,idade,registro,email){
    this.nome = nome,
    this.email = email,
    this.idade = idade,
    this.registro = registro,
    this.endereco
  }

  incluiEndereco(endereco){
    this.endereco = endereco;
  }
}
