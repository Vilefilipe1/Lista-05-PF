const { composite, log, range, sum, equals, indef} = require('./utils.js')

const carrinho = [
    {item: "leite", preco:3, fragil:false}
    {item: "pão", preco:2.5, fragil:false}
    {item: "leite", preco:3, fragil:false}
]

const car_cambio = carrinho.map((x) => x * 5.5)
const car_soma = carrinho.preco.reduce((acc, x) => acc+x)
const car_desc10 = carrinho.preco.map((x) => x * 0.9)
const car_Soma10 = car_desc10.reduce((acc, x) => acc+x)
const car_frag = carrinho.preco.filter((x) => x.fragil == true)

// a)
console.log(`${carrinho.item}: ${carrinho.preco}`)
console.log(car_cambio)

// b)
console.log(car_soma)

// c)
console.log(car_Soma10)

// d)
console.log(car_cambio)
//console.log(car_frag)