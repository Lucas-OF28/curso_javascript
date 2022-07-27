const validarID = /\d+ID\b/

console.log(validarID.test("ID"))
console.log(validarID.test("id"))
console.log(validarID.test("Macaco"))
console.log(validarID.test("123ID"))