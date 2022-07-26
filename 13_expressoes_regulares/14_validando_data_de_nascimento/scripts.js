const validarDataDeNasc = /[0-31]{2}[/][0-12]{2}[/][1920 - 2020]{4}/

console.log(validarDataDeNasc.test('05/02/2001'))
console.log(validarDataDeNasc.test('12-12-1212'))
