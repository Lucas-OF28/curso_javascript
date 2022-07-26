const cep = /\d{5}-\d{3}/

console.log(cep.test("55555-555"))
console.log(cep.test("macaco"))

const tel = /\(d{2}\)\d{4,5}-\d{4}/

console.log(tel.test("(48)9999-9999"))