

const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))
const criar_turma = (tamanho) => {
    const aluno = {nome: '' , matricula: "" , idade: '' , curso: '' }
    
    const arr = new Array(tamanho)

    return arr.fill(aluno)
    
}
const ver_sem = (turma,matricula) => turma.some((x) => x.matricula == matricula)
const add_aluno = (a_nome, a_matricula, a_idade, a_curso, turma) => {
    turma.map((x) => {
    
        if (ver_sem(turma,a_matricula) === false && ver_sem(turma,"") === true ){
        
            x.nome = a_nome
            x.matricula = a_matricula
            x.idade = a_idade
            x.curso = a_curso
                
                
        }
    })
}

const turma1 = criar_turma(5)
listar(turma1)
console.log(ver_sem(turma1,2024002), ver_sem(turma1,""))
console.log(turma1[0])
add_aluno("luiz", 2024002, 18, "cc", turma1)
console.log(turma1)
add_aluno("luasdaasdiz", 2024003, 18, "Ec", turma1)
listar(turma1)


