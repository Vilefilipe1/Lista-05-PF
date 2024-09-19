
const turma1 = []

const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))
const buscar_curso = (curso) => listar(turma1.filter((x) => x.curso == curso))
const ver_sem = (turma,matricula) => turma.some((x) => x.matricula == matricula)
const add_aluno = (a_nome, a_matricula, a_idade, a_curso, turma) => {
    if (ver_sem(turma,a_matricula) === false ){
        const aluno = [{nome: '' , matricula: "" , idade: '' , curso: '' }]
        aluno.map((x) => {
            x.nome = a_nome
            x.matricula = a_matricula
            x.idade = a_idade
            x.curso = a_curso
        })
        turma.push(aluno[0])  
    }   
}
const remo_aluno = (matricula,turma) =>{
    turma.filter((x) => x.matricula != matricula)
}
add_aluno("luiz", 2024002, 18, "cc", turma1)
add_aluno("luasdaasdiz", 2024005, 18, "Ec", turma1)
add_aluno("sdiz", 2024003, 18, "cc", turma1)
add_aluno("aasdiz", 2024004, 18, "Ec", turma1)
add_aluno("luasd", 2024001, 18, "cc", turma1)
//console.log(turma1)
//console.log(turma1[0])
//console.log(turma1[1])

//turma1.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))
listar(turma1)
buscar_curso('cc')

/*  criar turma = (tamanho) => retorna um array de tamanho x com o valor 
{nome: '' , matricula: "" , idade: '' , curso: '' } em cada index

add aluno = (a_nome, a_matricula, a_idade, a_curso, turma) => altera um 
{nome: '' , matricula: "" , idade: '' , curso: '' } que esteja vazio caso não tenha sua matricula presente
na turma

remover aluno = (matricula) => altera o registro com a matricula designada para
{nome: '' , matricula: "" , idade: '' , curso: '' }
*/
