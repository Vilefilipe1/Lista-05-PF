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

const remo_aluno = (nome, t) => t.filter((x) => x.nome != nome)

// Questão 7

const ordenar = (turma) => turma.sort((a, b) => a.matricula - b.matricula)

// Questão 8

const contagem_Curso = (turma) => {
    const contagemCurso = (curso,turma) => (buscar_curso(curso,turma)).reduce((acc) => acc + 1, 0)
    const conCC = contagemCurso("cc", turma)
    const conSI = contagemCurso("si", turma)
    const conEC = contagemCurso("ec", turma)
    return `CC: ${conCC}, SI: ${conSI}, EC: ${conEC}`
}

// Questão 9

const edit_aluno = (nome, turma) => (new_nome,new_matricula,new_idade,new_curso) =>{

    const r = remo_aluno(nome,turma)
    return add_aluno(r)(new_nome,new_matricula,new_idade,new_curso)

}