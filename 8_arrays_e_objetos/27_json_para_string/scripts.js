let pessoa = {
  "nome": "Lucas",
  "idade": 21,
  "profissao": "Programador",
  "hobbies": ["video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJson = JSON.parse(pessoaTexto)

console.log(pessoaJson)