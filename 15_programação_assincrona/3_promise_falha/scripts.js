let p = Promise.resolve(new Error("Nao pega"))

console.log("aaaaaaaaaaa")

p.then((value) => console.log(value))
.catch(reason => console.log("Falhou: " + reason))