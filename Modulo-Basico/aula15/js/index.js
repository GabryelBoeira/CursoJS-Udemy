//Aula sobre a biblioteca Math
let num1 = 9.5678015;

 // arredondamento de valor para baixo
let num2 = Math.floor(num1);
console.log(num2);

// arredondamento de valor para cima
num2 = Math.ceil(num1); 
console.log(num2);

// arredondamento de valor automaticamente
num2 = Math.round(num1);  
console.log(num2); 

// Sequencia de números 
console.log(Math.max(1,2,8,-5,3,10,9,5,8)); // maior número 
console.log(Math.min(1,2,8,-5,3,10,9,5,8)); // menor número

// Números aleatorios entre 0 e 1, nunca o numero 1
const aleatorio = Math.random() * 1000; // numeros entre 0 a 999
console.log(Math.round(aleatorio));

// Calcular a raiz quadrada 
let raiz = 16;
console.log(raiz ** 0.5);

// Contas com divisão com zero e permitida
console.log(100 / 0); 