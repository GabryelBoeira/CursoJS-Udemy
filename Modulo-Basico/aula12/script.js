// Exercicio para alteração de conteudo sem alterar os dados já inseridos 

//Solução 1 
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA , varB , varC);

// solução dois 
varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA , varB , varC);
