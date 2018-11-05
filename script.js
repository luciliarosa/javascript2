let idade = Number (prompt('Qual a sua idade?'));
let renda = Number (prompt('Qual a sua renda?'));
let valorEmprestimo = Number (prompt('Qual a sua renda?')); 

if (idade > 25 && idade < 65 && 
    renda >= 1500 &&
    valorEmprestimo >= 1000 && valorEmprestimo <= renda * 10){
    alert('Aprovado')
}
else{
    alert('Não aprovado')
}