const validaDominio = /[?www.]\w\.com.br|.com/

console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.lucas.com.br"))
console.log(validaDominio.test("macaco.com"))