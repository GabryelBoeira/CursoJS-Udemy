// Retorno de funções
// retorno simples.
function soma(a, b){
    
    return a + b;
}
console.log(soma(2,3), `Exibe o retorno da função`);

function falaFraseInicio(comeco){
    
    function falaFraseFinal(fim){
        return comeco + ' ' + fim;    
    }
    return falaFraseFinal;
}

// olaMundo recebe função de retorno da função inicial
// esse tipo de função pode gerar codigo tipo boneca russa.
const olaMundo = falaFraseInicio('Olá');
console.log(olaMundo('mundo !'));
console.log();

function criaMultiplicador(multiplicador){
    return function(numero){
        return numero * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadrplica = criaMultiplicador(4);

console.log( `Valor Duplicado de 4 = ${duplica(4)}`);
console.log( `Valor triplica de 4 = ${triplica(4)}`);
console.log( `Valor quadrplica de 4 = ${quadrplica(4)}`);
