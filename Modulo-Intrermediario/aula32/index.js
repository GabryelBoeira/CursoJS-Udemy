// atribuição de desestruturação em array
const numeros = [154, 251, 3245, 40, 5558, 556, 557, 588, 589];
// operção com (... rest) nesse monemto de execução 
const [um, dois, tres, ... resto] = numeros
console.log(um, dois, tres);
console.log(resto);

console.log();

// array dentro de outro array
//                         0          2          3
//                      0  1  2    0  1  2    0  1  2
const arrayInArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; 
const [ ,[ , , seis]] = arrayInArray

console.log(arrayInArray[1][2] + ' Maneira sem desestruturação');
console.log(seis + ' Maneira com desestruturação');
