class Endereco{
  constructor(rua, bairro, cidade, estado){
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }

  set novaRua(novaRua){
    this.rua = novaRua
  }

  set novoBairro(novoBairro){
    this.bairro = novoBairro
  }

  set novaCidade(novaCidade){
    this.cidade = novaCidade
  }

  set novoEstado(novoEstado){
    thid.estado = novoEstado
  }

}

let endereco = new Endereco("Rua jose leonardo herdt", "Santa isabel", "Forquilhinha", "Santa Catarina")

console.log(endereco)

endereco.novaRua = "Rua das aroeiras"

console.log(endereco)

endereco.novaCidade = "Chita"

console.log(endereco)
