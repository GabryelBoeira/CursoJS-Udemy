// Parametros de função 

// Somente funções declaradas assim permite a execução mesmo não identificando nos parametros da função
function funcao(){
    // todos os parametros são recebidos por : arguments
    console.log(arguments);
}

funcao('valor', 'teste', 1, 2, 3, 4, 5);
//

function funcaoSoma(){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos;
    }
    console.log(total, 'Valores pegos com arguments');
}
funcaoSoma( 1, 2, 3, 4, 5, 6, 7);

// definir valor para tratar possibilidade de undefined
function somaDoisNum(a = 0, b = 1, c = 2){
    console.log(a + b + c, 'Valor default');
}

somaDoisNum(10, undefined, 30);

// Valores sendo pegos via desestruturação com objetos 
function funcaoDesetruturacaoObj({nome, sobreNome, idade}) {
    console.log(nome, sobreNome, idade, 'desestruturação Objetos');
}

let obj = {nome: 'Gabryel', sobreNome: 'Boeira', idade: 21};
funcaoDesetruturacaoObj(obj);

// Valores sendo pegos via desestruturação com arrays 
function funcaoDesetruturacaoArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3, 'desestruturação arrays');
}

let array = ['Gabryel', 'Boeira', 21];
funcaoDesetruturacaoArray(array);

// utilizando rest operator 
function conta(operador, acumulador, ...numeros){

    for(let numero of numeros){
        if(operador === '+'){
            acumulador += numero;
        }        
    }
    console.log(acumulador);
}
conta('+', 0 , 10, 30, 40, 50, 60);

// Arrow fuction, unica maneira de receber todos os parametros se os definilos nos argumentos e utilizando  operador rest
const conta = (...argts) => {
    console.log(argts);
}
conta('+', 0 , 10, 30, 40, 50, 60);