const criar_aluno = (n, i, m, c) => ({nome: n, idade: i, matricula: m, curso: c})

const turma = []

const add_aluno = (turma) => (nome,matricula,idade,curso) => turma.concat(criar_aluno(nome, matricula, idade, curso))

const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))

const buscar_curso = (curso,turma) => turma.filter((x) => x.curso == curso)


const remo_aluno = (m, t) => t.filter((x) => x.matricula != m) // Talvez ele queira com nome

const ordenar = (turma) => turma.toSorted((a, b) => a.matricula - b.matricula)



const contagem_Curso = (turma) => {
    const contagemCurso = (curso,turma) => (buscar_curso(curso,turma)).reduce((acc) => acc + 1, 0)
    const ArrayCursos = Array(turma.length).fill("a").map((x, acc) => x = turma[acc].curso) // Aqui ele vai criar um array com todos os cursos ['cc', 'medicina', 'cc', 'medicina', 'medicina', 'ECC']
    const ArrayCursosSEMREP = ArrayCursos.filter((x, acc) => ArrayCursos.indexOf(x) == acc) // Aqui ele vai tirar os repetidos ['cc', 'medicina', 'ECC']
    const ArrayContagemCURSO = Array(ArrayCursosSEMREP.length).fill(undefined).map((x, acc) => x = contagemCurso(ArrayCursosSEMREP[acc],turma)) // Ent ele cria um novo array e conta cada um do anterior
    return ArrayContagemCURSO
}

const edit_aluno = (matricula, turma) => (new_nome,new_matricula,new_idade,new_curso) =>{

    const r = remo_aluno(matricula,turma)

    return add_aluno(r)(new_nome,new_matricula,new_idade,new_curso)

}


const turma_v2 = add_aluno(turma)("luiz", 2023002, 18, "cc")
const turma_v3 = add_aluno(turma_v2)("roger", 2022002, 22, "si")
const turma_v4 = add_aluno(turma_v3)("filipe", 2024002, 50, "cc")
const turma_v5 = add_aluno(turma_v4)("otavio", 2024001, 38, "ec")
listar(ordenar(turma_v5))

const turma_v6 = edit_aluno(2023002,turma_v5)('Louis',2021001,21,'ec')
listar(remo_aluno(2023002,turma_v5))
//listar(ordenar(turma_v6))
//console.log(contagem_Curso(turma_v6))

