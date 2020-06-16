//Exemplo de filtro sem a utilização do filter

const numeros = [45, 54 ,8 ,85, 9, 3, 89, 42, 10, 59, 33, 7, 2, 1, 0];
const numerosMaior10 = [];

for(let numero of numeros){ 
    // retorna números maior que 10 sem o filter
    if(numero > 10){

        numerosMaior10.push(numero);
    }    
}
//console.log(numerosMaior10);

// filter em array 
// Utilizando o metodo para fazer a mesma consulta retorna números maior que 10 sem o filter
// Sempre retorna um array 
function callbackFilter(valor, indice, array){
    if(valor > 10) return true;
    
   return false;
 }
//const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados = numeros.filter(valor => valor > 10); // Versão resumida do medoto anterior
//console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Gabryel', idade : 21},
    {nome: 'Joana', idade : 32},
    {nome: 'Luiz', idade : 55},
    {nome: 'Ana', idade : 20},
    {nome: 'Julio', idade : 60},
    {nome: 'Leticia', idade : 56},
    {nome: 'Cida', idade : 36}
]

// Retornar as pessoas com nome maior ou igual a 5
const pessoasComNomeExtenso = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeExtenso);

// Retornar as pessoas com mais de 50 anos
const pessoasMaioresCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaioresCinquentaAnos);

// Retornar as pessoas que o nome termine com a letra 'a'
const pessoasMaiores50 = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith(a));

