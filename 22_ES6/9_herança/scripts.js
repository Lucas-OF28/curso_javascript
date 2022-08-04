class Product{
 constructor (name, price){
  this.name = name
  this.price = price
 }

 productWithDiscount(discount){
  return this.price * ((100- discount)/ 100)
 }
}

const shirt = new Product('camisa gola v',20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tenis verde", 120)

console.log(tenis.productWithDiscount(20))

class ProductWithAttributes extends Product{
  constructor(name, price, colors){
    super(name,price)
    this.colors = colors
  }

  showColors(){
    console.log("AS CORES SÃO")
    this.colors.forEach((color)=>{
      console.log(color)
    })
  }
}

const hat = new ProductWithAttributes("Chapeu", 30, ["Preto","Azul", "Verde"])

console.log(hat.name)

console.loh(hat.productWithDiscount(30))

hat.showColors()