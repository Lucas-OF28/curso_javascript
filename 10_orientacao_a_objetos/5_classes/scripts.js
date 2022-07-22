let cachorro = {
  patas: 4,
  raca: "SDR",
  latir: function(){
    console.log("AU AU")
  }
}

let pastorAlemao =  Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao.raca)