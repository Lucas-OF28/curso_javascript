let a = document.querySelector('footer a')

console.log(a.getAttribute('href'))

let link = 'https://www.youtube.com/c/Synapse1'

a.setAttribute('href', link)

console.log(a.getAttribute('href'))