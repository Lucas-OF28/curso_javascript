let num = 1
let num1 = 5
let num2 = 10

function imprimirNumeros(...args){
  for(let i = 0; i <args.length; i++ ){
    console.log(args[i])
  }
}
 imprimirNumeros(num,num1,num2)
 console.log("Pause")
 imprimirNumeros(num2,num1)
 console.log("Pause")
 imprimirNumeros(2,5,4,8,9,6)
 console.log("Pause")