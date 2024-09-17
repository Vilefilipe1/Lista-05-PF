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

const edicaoAluno = (nome, idade, matricula, curso) => { // Ainda falta
    removerAluno(nome)
    const turma5 = adicionarAluno(nome, idade, matricula, curso)
    return turma5
}

console.log(edicaoAluno("Filipe", 25, 23, "medicina")[0])