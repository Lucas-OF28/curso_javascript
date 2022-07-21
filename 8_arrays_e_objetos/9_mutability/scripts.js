let x = {
  pontos: 10
}

z = x

let y = {
  pontos: 10
}

console.log(x == z) //true
console.log(x == y) //false


let pessoa = {
  nome: "Lucas"
}

let pessoa2 = pessoa

console.log(pessoa2)

pessoa2.nome = "Maria"

console.log(pessoa.nome)
console.log(pessoa2.nome)