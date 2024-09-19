const lista = [100, 80, 60, 120, 90]

// a = lista.map((x) => x + lista[1] + lista[2] + lista[3] + lista[4])
// b = a.filter((x) => x==a[0])
// console.log(b) // [450]

console.log(lista.join('+'))
const soma_lista = eval(lista.join('+'));
console.log(soma_lista); 

