const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validarMarca.test("Marca: Nike"))
console.log(validarMarca.test("Tenis da Nike"))
console.log(validarMarca.test("aaaa"))
console.log(validarMarca.test("Puma"))
console.log(validarMarca.test("Tenis da Adidas"))