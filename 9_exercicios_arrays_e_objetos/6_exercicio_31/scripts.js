let num = [1,2,3]
let num1 = [1,2,3,4,5,6,7,8]

function verificar(arr){
  if(arr.length >= 5){
    console.log("Muitos elementos")
  }else{
    console.log("Poucos elementos")
  }
}

verificar(num)
verificar(num1)