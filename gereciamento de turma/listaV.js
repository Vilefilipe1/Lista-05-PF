const aluno = (n, i, m, c) => ({nome: n, idade: i, matricula: m, curso: c})

// const turma = []

var turma = []


const adicionarAluno = (nome, idade, matricula, curso) => [...turma, aluno(nome, idade, matricula, curso)] 

const listarAluno = () => turma.map((x, acc) => console.log(`${acc+1}° aluno:`, x))

turma = adicionarAluno("Filipe", 18, "202400017773", "cc")
turma = adicionarAluno("Pilon", 15, "202400017533", "medicina")
turma = adicionarAluno("Carlos", 11, "202400015233", "cc")

// console.log(turma2[0])

const buscar_curso = (curso) => turma.filter((x) => x.curso == curso)

const removerAluno = (n) => [...turma].filter((x) => x.nome != n)

const ordenarAluno = () => [...turma].sort((x,y) => x.matricula - y.matricula)

const contagemCurso = (curso) => (buscar_curso(curso)).reduce((acc) => acc + 1, 0) // Ainda falta
// const contagemCurso = (curso) => (buscar_curso(curso)).length

const edicaoAluno = (nome) => (novo_nome, novo_idade, novo_matricula, novo_curso) => {
    return [...([...turma].filter((x) => x.nome != nome)), aluno(novo_nome, novo_idade, novo_matricula, novo_curso)] 
}

// console.log(turma[0])
// console.log(edicaoAluno("Filipe")("Henrique", 124, "14232", "Medicina")[2])

console.log(contagemCurso("cc"))