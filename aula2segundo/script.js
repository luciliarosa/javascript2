let i = 0;
let valor = 0;

while(i <= 10){
    //console.log(valor);
    valor += 10;
    i ++;
}

let nomes = ['Felipe' , 'Renan' , 'Bruno' , 'Giselle', 'Camila', 'Eric'];

//lista[0] = 'Felipe Top';
//lista[0] = lista[0] + 'Top'; 

for(let nome of nomes){
    console.log(nome);

    nome += ' Top';

    console.log(nome)
}

console.log(nomes);
