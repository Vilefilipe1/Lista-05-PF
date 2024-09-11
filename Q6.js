const { range } = require("./utils");

lista = range(1,10)

lista1 = (lista.reduce((acc, x) => acc+x))**2
console.log(lista1)

listaSOMA = lista.map((x) => x**2)
lista2 = listaSOMA.reduce((acc, x) => acc+x)
console.log(lista2)
console.log(lista1 - lista2)