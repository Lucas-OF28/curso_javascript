// 1 - var, let const

let a = 10
let b = 15

if(b > 10){
  let a = 5
  console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5;i++){
  console.log(i)
}

console.log(i)

const name = "Macaco"

function logName(){
  const name = "Lucas"
  console.log(name)
}

logName()
console.log(name)
