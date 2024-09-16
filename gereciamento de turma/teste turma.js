
const criar_turma = (tamanho) => {
    const aluno = [{nome: '' , matricula: "" , idade: '' , curso: '' }]
    
    

    return aluno.map((x) => Array(tamanho).fill(x))
}
const listar = (lista) => lista.map((x,acc)=> console.log(`${acc+1}° aluno:`, x))
turma = criar_turma(10)

listar(turma)
console.log(turma[0])

const criar_aluno = (a,m,i,c) => ({nome: a , matricula: m , idade: i , curso: c })

    
    


console.log(criar_aluno('luiz',2,18,'cc'))
console.log(criar_aluno('filipe',3,18,'cc'))