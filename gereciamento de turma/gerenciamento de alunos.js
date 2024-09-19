// Gerenciamento de Alunos(as)
// Filipe Ciríaco Marcelino do Nascimento
// Otávio Augusto B. Santos Filho
// Luiz Manoel Rosa Nunes Meneses

// Questão 1

const criar_aluno = (n, m, i, c) => ({nome: n, matricula: m, idade: i, curso: c})

// Questão 2

const turma = []

// Questão 3

const add_aluno = (turma) => (nome,matricula,idade,curso) => turma.concat(criar_aluno(nome, matricula, idade, curso))

// Questão 4

const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))

// Questão 5

const buscar_curso = (curso,turma) => turma.filter((x) => x.curso == curso)

// Questão 6

const remo_aluno = (nome, turma) => turma.filter((x) => x.nome != nome)

// Questão 7

const ordenar = (turma) => turma.toSorted((a, b) => a.matricula - b.matricula)

// Questão 8

const contagem_Curso = (turma) => {
    const quantosCurso = (curso,turma) => (buscar_curso(curso,turma)).reduce((acc) => acc + 1, 0)
    const conCC = quantosCurso("cc", turma)
    const conSI = quantosCurso("si", turma)
    const conEC = quantosCurso("ec", turma)
    return `CC: ${conCC}, SI: ${conSI}, EC: ${conEC}`
}
// const contagem_Curso = (turma) => {
//     const contagemCurso = (curso,turma) => (buscar_curso(curso,turma)).reduce((acc) => acc + 1, 0)
//     const ArrayCursos = Array(turma.length).fill(NaN).map((x, acc) => x = turma[acc].curso) // Aqui ele vai criar um array com todos os cursos ['cc', 'medicina', 'cc', 'medicina', 'medicina', 'ECC']
//     const ArrayCursosSEMREP = ArrayCursos.filter((x, acc) => ArrayCursos.indexOf(x) == acc) // Aqui ele vai tirar os repetidos ['cc', 'medicina', 'ECC']
//     const ArrayContagemCURSO = Array(ArrayCursosSEMREP.length).fill(undefined).map((x, acc) => x = contagemCurso(ArrayCursosSEMREP[acc],turma)) // Ent ele cria um novo array e conta cada um do anterior
//     return (Array(ArrayContagemCURSO.length).fill(undefined)).map((x, acc) => x = `${ArrayCursosSEMREP[acc]}: ${ArrayContagemCURSO[acc]}`)
// }

// Questão 9

const edit_aluno = (nome, turma) => (new_nome,new_matricula,new_idade,new_curso) =>{
    const r = remo_aluno(nome,turma)
    return add_aluno(r)(new_nome,new_matricula,new_idade,new_curso)
}

// const turmaV2 = add_aluno(turma)("Louis",20240001322,18,'ec')
// const turmaV3 = add_aluno(turmaV2)("Filipe",20220001511,16,'cc')
// const turmaV4 = add_aluno(turmaV3)("Henrique",20240002533,17,'ec')
// const turmaV5 = add_aluno(turmaV4)("Carlos",20230001010,18,'si')

// listar(turmaV5)
// listar(buscar_curso("ec", turmaV5))
// listar(remo_aluno("Filipe", turmaV5))
// listar(ordenar(turmaV5))
// console.log(contagem_Curso(turmaV5))