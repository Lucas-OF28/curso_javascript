class Cachorro {
  constructor(raca,cor){
    this.cor = cor
    this.raca = raca
  }
  latir(){
    console.log("Au au")
  }
}

Cachorro.prototype.patas = 4

let labrador =  new Cachorro('Labrador', "Branco")

console.log(labrador.patas)

labrador.latir()