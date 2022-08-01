let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let p = document.querySelector("p")
let a = document.querySelector("a")

function msg(e){
  console.log("Clicou no botao")
  e.stopPropagation()
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function(e){
  console.log(e)
})

p.addEventListener("click", function(){
  console.log("clicou no paragrafo")
})

a.addEventListener("click", function(e){
  e.preventDefault()

  console.log("Nao é possivel mudar de pagina")
})