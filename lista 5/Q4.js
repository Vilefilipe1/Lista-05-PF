// Q4. Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda. Dica: o index de um elemento inexistente é -1. Ex: ['Ana','Bia','Marcela','Carlos','Maria'] e ['Bia','João, 'Marcela','Carlos','Camila'] →→ 3

lista = ['Ana','Bia','Marcela','Carlos','Maria']
lista2 = ['Marcela', 'Bia', 'Antonio', 'Filipe','Carlos', 'Carlos']

console.log((lista.filter((x) => lista2.indexOf(x) != -1)).length)

const ver_sem = (l1,l2) => (l1.filter((x) => l2.indexOf(x) != -1)).length

console.log(ver_sem(lista,lista2))