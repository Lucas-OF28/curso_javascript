function Cachorro(raca, patas, cor){
  this.raca = raca
  this.patas = patas
  this.cor = cor
  this.uivar = function(){
    console.log("Auuuuuuuuu")
  }}

  Cachorro.prototype.uivar =  function(){
    console.log("a")
  }

let husky = new Cachorro("Husky", 4, "Branco")

husky.uivar()