function nomeComIdade(nome, idade){
  if(idade == undefined){
    console.log("Seu nome é " + nome)
  }else{
    console.log("Seu nome é " + nome + " e você tem " + idade + " anos")
  }
}

nomeComIdade("João")
nomeComIdade("João",18)

function soma(a,b){
  if(a == undefined || b == undefined){
    console.log("Esta função precisa ter dois argumentos")
  }else{
    return a + b
  }
}

console.log(soma(1,2))
console.log(soma(1))