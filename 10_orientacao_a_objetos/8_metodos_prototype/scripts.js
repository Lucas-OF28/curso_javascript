function Cachorro(raca, patas, cor){
  this.raca = raca
  this.patas = patas
  this.cor = cor
  }

  Cachorro.prototype.uivar =  function(){
    console.log("Auuuuuuu")
  }
  Cachorro.prototype.latir = function(){
    console.log("Au au")
  }

let husky = new Cachorro("Husky", 4, "Branco")

husky.uivar()
husky.latir()