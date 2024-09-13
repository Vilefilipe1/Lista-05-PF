const lista = [100, 80, 60, 120, 90]

const Soma_lista = (lista.map((x) => x = (lista.reduce((acc,x) => acc + x))))

// console.log(lista) // [100, 80, 60, 120, 90]
// console.log(Soma_lista) // [450, 450, 450, 450, 450] 

const som_lista = (lista) => lista.map((x) => x = (lista.reduce((acc,x) => acc + x)))

console.log(som_lista(lista)) // [450, 450, 450, 450, 450]

