// Funçoes geradoras a avaliação preguiçosa

function* geradora1(){
    // similar ao return para esse tipo de função
    // retorna na seguencia dos yield
    yield 'Valor 1';

    yield 'Valor 2';
    
    yield 'Valor 3';
}

const g1 = geradora1();
for(let valor of g1){
    console.log(valor);
}
console.log();

////////////////////////////
function* geradora2(){
    // gerador de numeros infinito
    let i = 0;
    
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log();

///////////////////////
//delegação de tarefas entre geradoras 
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}
console.log();
//////////////////

function* geradora5(){
   
    yield function(){
        console.log('Vim yield 01');
    };

    return function(){
        console.log('Vim do return');
    };
    // qualquer coisa abaixo do return não sera execudado 
    yield function(){
        console.log('Vim yield 03');
    };
}

const g5 = geradora4();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;
funcao1();
funcao2();