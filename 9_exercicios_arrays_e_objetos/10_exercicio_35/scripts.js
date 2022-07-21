let calculadora = {
  soma: function(a, b){
    return a + b
  }, 
  subtrair: function(a, b){
    return a - b
},
  mult: function(a, b){
    return a * b
},
  div: function(a, b){
    return a / b
}
}

console.log(calculadora.soma(4,2))
console.log(calculadora.subtrair(4,2))
console.log(calculadora.mult(2,4))
console.log(calculadora.div(2,8))