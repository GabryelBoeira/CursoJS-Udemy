// Método splice em Array
const nomes = ['Gabryel', 'Joana', 'Maria', 'Marcos', 'Julio', 'Leticia'];

// nomes.splice(indice, qtdDeletar, adicionar1, adicionar2, adicionar3)
// retorna array com objetos removidos 
console.log(nomes, 'antes de remover os elementos');

// simula pop
let removidos = nomes.splice(-1, 1);
console.log(removidos);

// simula shift
removidos = nomes.splice(0, 1);
console.log(removidos);


// similar ao push 
console.log(nomes, 'antes de adicionar os elementos');
nomes.splice(nomes.length, 0, 'Luiz', 'Emanuela');
console.log(nomes);
nomes.splice(-2, 2);

// similar ao Unshift  
console.log(nomes);
nomes.splice(0, 0, 'Luiz', 'Emanuela');
console.log(nomes);