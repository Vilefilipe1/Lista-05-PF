
const add_aluno = (turma) => (a,m,i,c) => turma.concat(({nome: a , matricula: m , idade: i , curso: c }))

const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))

const remo_aluno = (matricula, turma) => turma.filter((x) => x.matricula != matricula)

const ordenar = (turma) => turma.toSorted((a, b) => a.matricula - b.matricula)



const turma = []

const turma_v2 = add_aluno(turma)("luiz", 2023002, 18, "cc")
const turma_v3 = add_aluno(turma_v2)("luiz", 2022002, 18, "cc")
const turma_v4 = add_aluno(turma_v3)("luiz", 2024002, 18, "cc")
const turma_v5 = add_aluno(turma_v4)("luiz", 2024001, 18, "cc")
listar(ordenar(turma_v5))