const dia = /\d\d/

console.log(dia.test("2019") && "2019".length == 2)
console.log(dia.test("asd"))
console.log(dia.test("05") && "05".length == 2 )

const palavasPeloMenosTresLetras = /\w\w\w/

console.log(palavasPeloMenosTresLetras.test("dia"))
console.log(palavasPeloMenosTresLetras.test("noite"))
console.log(palavasPeloMenosTresLetras.test("alo"))
console.log(palavasPeloMenosTresLetras.test("aa"))