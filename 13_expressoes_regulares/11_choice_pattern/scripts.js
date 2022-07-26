const reg = /\w+: (Lucas|Mateus|Joao)/ // Nome: asdadadda

console.log(reg.test("Nome: Lucas"))
console.log(reg.test("Nome: Pedro"))