const arr = [1,2,3,4,5]

console.log(arr)

const highNumbers = arr.filter((n) => {
  if(n >= 3){
    return n
  }
})

console.log(highNumbers)

const users = [ 
  {name: "Lucas", avaliable: true},
  {name: "Marcos", avaliable: false},
  {name: "Jean", avaliable: false},
  {name: "Cleiton", avaliable: true},
]

const avaliableUsers =  users.filter((user) => user.avaliable)
console.log(avaliableUsers)