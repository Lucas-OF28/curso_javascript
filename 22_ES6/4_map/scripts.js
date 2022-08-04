const products = [
  {name: 'camisa', price: 10.99, category: 'roupas'},
  {name: 'calça', price: 19, category: 'roupas'},
  {name: 'banana', price: 2000, category: 'comida'},
  {name: 'maça', price: 800, category: 'comida'},
]

products.map((product) => {
  if(product.category === 'roupas'){
  product.onSale = true
}
})

console.log(products)