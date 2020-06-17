//Exemplo utilização do map 
// alteração no valor final do array

const numeros = [45, 54 ,8 ,85, 9, 3, 89, 42, 10, 59, 33, 7, 2, 1, 0];

// map(function(valor, indice, array)) = valores retornados 

// Multiplicar valores do array pelo dobro 
const numrerosEmDobro = numeros.map(valor => valor * 2);
console.log(numrerosEmDobro);

const pessoas = [
    {nome: 'Gabryel', idade : 21},
    {nome: 'Joana', idade : 32},
    {nome: 'Luiz', idade : 55},
    {nome: 'Ana', idade : 20},
    {nome: 'Julio', idade : 60},
    {nome: 'Leticia', idade : 56},
    {nome: 'Cida', idade : 36}
]

// Retorna apenas uma string com o nome da pessoa
const nomePessoas = pessoas.map(obj => obj.nome);
console.log(nomePessoas);

// Remover a chave "nome" do objeto
const pessoasIdade = pessoas.map(obj => ({idade: obj.idade}) );//  delete obj.nome return obj 
console.log(pessoasIdade);

// Adicionar uma chave "ID" em cada objeto
const pessoasComId = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(pessoasComId);
