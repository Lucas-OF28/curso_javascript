let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9_]/

console.log(validarNomeUsuario.test("lucas_451"))