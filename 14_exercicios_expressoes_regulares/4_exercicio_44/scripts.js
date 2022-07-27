const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validaIp.test("192.0.0.1"))
console.log(validaIp.test("127.0.0.0"))
console.log(validaIp.test("192.8.204.4"))