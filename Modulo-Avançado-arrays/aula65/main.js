// Utilização da combinação do filter, map e reduce 

// Retornae a soma do dobro de todos os numeros pares
// -> filtrar numeros pares
// -> Dobrar numeros pares
// -> Reduzir numeros pares (Somar os numeros )

const numeros = [45, 54 ,8 ,85, 9, 3, 89, 42, 10, 59, 33, 7, 2, 1, 0];
const totalDobroPares = numeros
                        .filter((valor) => valor % 2 === 0)
                        .map((valor) => valor * 2)
                        .reduce((acumulador, valor) => acumulador += valor);

console.log(totalDobroPares);