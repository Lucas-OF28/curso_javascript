const {createServer, request} = require('http')

let serve = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(`
    <h1>Hello World</h1>
    <p>Primeira pagina com Node.js</p>
  `)
  response.end()

})

serve.listen(8000)

console.log("Ouvindo a porta 8000")