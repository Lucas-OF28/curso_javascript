let idade = 18
const CNH = true

if(idade >= 18 && CNH == false){
  console.log("Não pode dirigir, pois não possui CNH")
}else if(idade >= 18 && CNH == true){
  console.log("Pode digirir")
}else{
  console.log("Não pode dirigir")
}