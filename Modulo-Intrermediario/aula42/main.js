// Números divisiveis por 3 = Fizz
// Números divisiveis por 5 = Buzz
// Números divisiveis por 5 e 3 = FizzBuzz
// Números não divisiveis por 5 e 3 = Retornar o número
// Validar se e um número antes de validar 
// Números enter 0 a 100
let numFizzBuzz = 0;
let numBuzz = 0;
let numFizz = 0;
let num = 0;

const fizzBuzz = (numero) => {
    
    if(numero % 3 === 0 && numero % 5 === 0){   
        numFizzBuzz++;
        return 'FizzBuzz';
    }

    if(numero % 5 === 0){       
        numBuzz++;
        return 'Buzz';
    }    
    
    if(numero % 3 === 0){       
        numFizz++
        return 'Fizz';
    }
    num++;
    return numero;
}

const execucao = () => {
    
    for(let i = 0; i <= 100; i++){   

        if(!Number.isNaN(i)){

            console.log(i, fizzBuzz(i));
        }
    }

    
}

execucao();
console.log('Totais: ');
console.log(`Números divisiveis por 5 e 3 : ${numFizzBuzz}`);
console.log(`Números divisiveis por 5 : ${numBuzz}`);
console.log(`Números divisiveis por 3 : ${numFizz}`);
console.log(`Números não divisiveis = ${numFizz}`);

