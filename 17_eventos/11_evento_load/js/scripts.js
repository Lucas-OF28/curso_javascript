// window.addEventListener("load", function(){
//   alert("Preencha nossos dados")
// })

window.addEventListener("beforeunload", function(e){
 event.returnValue = null
})