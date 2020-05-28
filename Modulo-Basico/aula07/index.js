// Aula sobre constantes em js
/**constantes necessida ser inicializadas */
const num1 = 5;
const num2 = 10;
const resultado = num1 * num2;
console.log(resultado);

//Exercicio fixação aula 7, utilizado constantes pois não havera a notificação de conteudo 
const nome = 'Gabryel Johnatam';
const sobreNome = 'Boeira';
const idade = 21;
const peso = 120;
const alturaM = 1.75;
let imc;
let dtNascimento;

imc = peso / (alturaM * alturaM);
dtNascimento = 2020 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`Tem ${alturaM} de altura e seu IMC é de ${imc} e nasceu em ${dtNascimento}`);
console.log(`${nome} nasceu em ${dtNascimento}`);