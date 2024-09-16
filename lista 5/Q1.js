const { composite, log, range, sum, equals, indef} = require('./utils.js')

const carrinho = [
    {item: "leite", preco:3, tipo:"alimento", fragil:false},
    {item: "pão", preco:2.5, tipo:"alimento", fragil:true},
    {item: "sabonete", preco:2, tipo:"limpeza", fragil:false},
    {item: "café", preco:1.5, tipo:"alimento", fragil:false},
    {item: "pá", preco:5, tipo:"ferramenta", fragil:false},
]

const car_cambio = carrinho.map((x) => x.preco * 5.5)
// const car_soma = carrinho.reduce((acc, x) => acc+(x.preco), 0)
// const car_desc10 = carrinho.map((x) => x.preco * 0.9)
// const car_Soma10 = car_desc10.reduce((acc, x) => acc+x)
const car_fragil = carrinho.filter((x) => x.fragil == true)
const car_precoFragil = car_fragil.reduce((acc, x) => acc+x.preco, 0)

// // a)
// console.log(`${carrinho}: ${carrinho.preco}`)
// console.log(car_cambio)

// // b)
// console.log(car_soma)

// // c)
// console.log(car_Soma10)

// // d)
// console.log(car_cambio)
// console.log(car_precoFragil)

// e)
// const car_letraEspc = carrinho.filter((x) => x.item[0] == "c")
// const car_letraEspc2 = car_letraEspc.reduce((acc, x) => acc+x.preco, 0)
// console.log(car_letraEspc2)

// f)
// const car_alimento = carrinho.filter((x) => x.tipo == "alimento")
// const car_ferramenta = carrinho.filter((x) => x.tipo == "ferramenta")
// const car_limpeza = carrinho.filter((x) => x.tipo == "limpeza")
// const car_precoAlimento = car_alimento.reduce((acc, x) => acc+x.preco, 0)
// const car_precoFerramenta = car_ferramenta.reduce((acc, x) => acc+x.preco, 0)
// const car_precoLimpeza = car_limpeza.reduce((acc, x) => acc+x.preco, 0)
// const car_media = (car_precoAlimento+car_precoFerramenta+car_precoLimpeza)/3
// console.log(car_precoAlimento)
// console.log(car_precoFerramenta)
// console.log(car_precoLimpeza)
// console.log(car_media)
