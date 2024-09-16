const aluno = {nome: '' , matricula: "" , idade: '' , curso: '' }

const criar_turma = (tamanho) => {
    const aluno = [{nome: '' , matricula: "" , idade: '' , curso: '' }]
    
    

    return aluno.map((x) => Array(tamanho).fill(x))
}
const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))
turma = criar_turma(10)

listar(turma)
console.log(turma[0])

const add_aluno = (a,m,i,c) => {

    const aluno = {nome: a , matricula: m , idade: i , curso: c }
    return aluno

}
console.log(add_aluno('luiz',02,18,'cc'))
console.log(add_aluno('filipe',03,18,'cc'))