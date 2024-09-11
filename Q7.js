const { range } = require("./utils");

const n = 10
lista = range(0, n>0 ? n:undefined)
lista_primo = lista.filter((x) => ((x/x) - parseInt(x/x) == 0))
console.log(lista_primo)
