// Closures das funções 
function retornaFuncao(nome){

    //função anonima
    return function (){
        return nome;
    }
}

// Closures, quando não e mais possivel mudar o valor dentro da função no qual esta sendo fechado o escopo 
const funcao = retornaFuncao('Gabryel');
const funcao2 = retornaFuncao('Boeira');

console.log(funcao());
console.dir(funcao2());