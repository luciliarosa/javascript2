let idade = Number (prompt('Qual a sua idade?'));
let renda = Number (prompt('Qual a sua renda?'));
let valorEmprestimo = Number (prompt('Qual a sua renda?')); 

if (idade < 25 || idade > 65){
    alert(`Sua idade precisa ser entre 25 e 65 anos! O valor digitado foi ${idade}`);
    
}

else if (renda < 1500){
    alert(`Sua renda precisa ser igual ou maior que R$1000,00! O valor digitado foi ${renda}`);
    
}
else if (valorEmprestimo < 1000 || valorEmprestimo > renda * 10){
    alert(`O valor requisitado de R$ ${valorEmprestimo} não pode ser emprestado.`);
    
}