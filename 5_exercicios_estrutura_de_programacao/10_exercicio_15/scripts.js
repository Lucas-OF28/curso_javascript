let num = 41
let divisoes = 0

for(i = 1; i <= 41; i++){
  if(num % i == 0 ){
    divisoes++
  }
}

if(divisoes == 2){
  console.log(`O numero ${num} é primo`)
}else{
  console.log(`O numero ${num} não é primo `)
}