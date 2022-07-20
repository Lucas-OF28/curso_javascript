function multiplicarTresNumero(x,y,z){
  return x * y * z
}

console.log(multiplicarTresNumero(2,3,4))

const mult = multiplicarTresNumero(5,4,8)

console.log("O valor de mult é " + mult)


function podeDirigir(idade, cnh){
  if(idade >= 18 && cnh == true){
    console.log("Pode dirigir")
  }else{
    console.log("Não pode dirigir")
  }
}

console.log(podeDirigir(18,1))
console.log(podeDirigir(17,0))
console.log(podeDirigir(40,0))