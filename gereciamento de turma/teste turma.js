
const add_aluno = (turma) => (a,m,i,c) => turma.concat(({nome: a , matricula: m , idade: i , curso: c }))

const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))

const remo_aluno = (matricula, turma) => turma.filter((x) => x.matricula != matricula)

const ordenar = (turma) => turma.toSorted((a, b) => a.matricula - b.matricula)

const edit_aluno = (matricula, turma) => (n_novo,n_matricula,n_idade,n_curso) =>{

    const r = remo_aluno(matricula,turma)

    return add_aluno(r)(n_novo,n_matricula,n_idade,n_curso)

}


const turma = []

const turma_v2 = add_aluno(turma)("luiz", 2023002, 18, "cc")
const turma_v3 = add_aluno(turma_v2)("roger", 2022002, 22, "si")
const turma_v4 = add_aluno(turma_v3)("filipe", 2024002, 50, "cc")
const turma_v5 = add_aluno(turma_v4)("otavio", 2024001, 38, "ec")
listar(ordenar(turma_v5))

const turma_v6 = edit_aluno(2023002,turma_v5)('Louis',2021001,21,'ec')

listar(ordenar(turma_v6))