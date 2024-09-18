const f = (m,n) => {
        if (n==0) return 1
        else if (n < 0)return (1 / (m*f(m,n+1)))
        else return m * f(m,n-1)
}
const turma = []
//console.log(f(4,(-2)))
const add_aluno = (n) =>{
    const p = [...turma]
    const copi = p.push(n)
     return copi
    
}

console.log(add_aluno(2))