const notab = /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("julia"))

const nottoaz = /[^a - z]/

console.log(nottoaz.test("macacoo 123"))
console.log(nottoaz.test("123a"))
console.log(nottoaz.test("123"))