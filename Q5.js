const { range } = require("./utils")

lista = range(0,1000)
// console.log(lista)
// lista = [3, 999, 5, 3000, 15, 5000]

lista_menos1000 = lista.filter((x) => x < 1000)
lista_3_menos1000 = lista_menos1000.filter((x) => ((x/3) - parseInt(x/3) == 0))
lista_5_menos1000 = lista_menos1000.filter((x) => ((x/5) - parseInt(x/5) == 0))
lista_soma = lista_3_menos1000.reduce((acc, x) => acc + x) + lista_5_menos1000.reduce((acc, x) => acc + x)
// console.log(lista_menos1000)
// console.log(lista_3_menos1000)
// console.log(lista_5_menos1000)
console.log(lista_soma) // 233168