const pontoRegex = /./

console.log('.')
console.log(pontoRegex.test("macaco"))
console.log(pontoRegex.test("45d5asda"))
console.log(pontoRegex.test(" "))

const dRegex = /\d/ //0 - 9

console.log('d')
console.log(dRegex.test("asdasd"))
console.log(dRegex.test("asdas45"))
console.log(dRegex.test("4545"))


const dRegex2 = /\D/ // ^0 - 9]

console.log('D')
console.log(dRegex2.test("asdasd"))
console.log(dRegex2.test("asdas45"))
console.log(dRegex2.test("4545"))

const sRegex = /\s/ //nao aceita espaços

console.log('s')
console.log(dRegex2.test("asdasd"))
console.log(dRegex2.test("asdas45"))
console.log(dRegex2.test("4545"))

const wRegex = /\w/ // Apenas numeros e letras

console.log('w')
console.log(dRegex2.test("asdasd"))
console.log(dRegex2.test("asdas45"))
console.log(dRegex2.test("4545"))