// aula sobre funções em js
function saudacao(nome){
    console.log(`Bom dia! ${nome}`);
}
saudacao('Gabryel');

function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(5,5));

// função 'anonima'
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9));

// modo mais novo de atribuir uma função ArrowFunction
const raizArrow = n => n ** 0.5;
console.log(raizArrow(25));

