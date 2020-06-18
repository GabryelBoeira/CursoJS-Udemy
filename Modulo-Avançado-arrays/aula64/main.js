// Utilização do reduce em array
// Preferencialmente utilizada para reduzir o elemento a um item

/**
 * Composição da função reduce 
 * function(acumulador, valor, indice, array{
 * }, valorInicial/não obrigadorio)
 */

const numeros = [45, 54 ,8 ,85, 9, 3, 89, 42, 10, 59, 33, 7, 2, 1, 0];

// somar todos os numeros 
const total = numeros.reduce((acumulador, valor) => acumulador += valor);
console.log(total, 'total');

// somar todos os numeros pares 
const totalPar = numeros.reduce((acumulador, valor) => {
    
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;

}, 0);
console.log(totalPar , 'totalPar');

//
const pessoas = [
    {nome: 'Gabryel', idade : 21},
    {nome: 'Joana', idade : 32},
    {nome: 'Luiz', idade : 55},
    {nome: 'Ana', idade : 20},
    {nome: 'Julio', idade : 60},
    {nome: 'Leticia', idade : 56},
    {nome: 'Cida', idade : 36}
]

// Retornar a pessoa mais velha do grupo
const maisVelha = pessoas.reduce((acumulador, valor) => {
       if(acumulador.idade > valor.idade) return acumulador;
       return valor;
});
console.log(maisVelha, 'Pessoa mais velha do grupo');
