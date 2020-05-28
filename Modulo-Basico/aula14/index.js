let num1 = 1; // Type number
let num2 = 2.5456789999; // Type number

console.log(num1.toString() + num2);
console.log(typeof num1);

// converção de números com Float para arredondamento de casas decimais 
console.log(num2.toFixed(2));

// verificação de números inteiros
console.log(Number.isInteger(num1));

// verificação de erro em numeros 
let temp = num1 + 'ola';
console.log(Number.isNaN(temp));

// Correção para números flutuantes em contas 
num1 = 0.7;
num2 = 0.1;
console.log(num1 + num2);// resultado não esperado, por causa da convenção de js de arredondamento 

// Solução 1 : Da linguagem com funções
num1 += num2;
num1 = parseFloat(num1.toFixed(2));
console.log(`Solução 1 : ${num1}` );

// Solução 2 : Utilização de contas para os valores
num1 = 0.7;
num2 = 0.1;
num1 = ((num1 * 100 ) + (num2 * 100)) / 100;
console.log(`Solução 2 : ${num1}` );
