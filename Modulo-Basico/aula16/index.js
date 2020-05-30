// Aula sobre array 
const alunos = ['Luiza', 'Gabryel', 'Gabriel B', 'Gabriel A', 'João', 'Maria'];
console.log(alunos[0]);

//  adicionar elemto ao final do array
alunos[alunos.length] = 'Bianca'
alunos.push('final');//
console.log(alunos);

//  adicionar elemto ao inicio do array
alunos.unshift('Inicio');
console.log(alunos);

// Remover elemento do final do array
alunos.pop(); // pode salvar o item removido
console.log(alunos);

// Remover elemento do inicio do array
alunos.shift(); // pode salvar o item removido
console.log(alunos);

// Remover elemento do por indice do array e não atualiza o indice
delete alunos[5];
console.log(alunos[5]); //não atualiza o indice 

// fatiar/selecionar elemetos do array
console.log(alunos.slice(1,6))