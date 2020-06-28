// Métodos úteis para trabalhar com Promises
function radom(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min );
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string')  return reject('BAD VALUE');
            // permitido passar um unico parametro
            resolve(msg);
        }, tempo);
    });
}

//Promise.all() executada todas as promesas e lista o resultado
const promises = ['Promise.all', esperaAi('Promise 1 ', 3000), esperaAi('Promise 2 ', 500),esperaAi('Promise 3 ', 2000), 'Outro Valor'];

Promise.all(promises).then((valor) => {
    console.log(valor);
}).catch( e => {
    console.log(e);
});

//Promise.race() procura o primeiro valor concluido para Promise 
const promises2 = [esperaAi('Promise 1 ', 3000), esperaAi('Promise 2 ', 500), esperaAi('Promise 3 ', 2000), esperaAi(2222222, 3000), ];
Promise.race(promises2).then((valor) => {
    console.log(valor);
}).catch( e => {
    console.log(e);
});

//Promise.resolve()
function baixaPagina() {
    const emCache = true;
    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('Baixei a página', 5000)
    }
}

baixaPagina()
    .then( dadosPagina => {
        console.log(dadosPagina)
    })
    .catch( e => {
        console.log('Error: ', e);
    })

//Promise.reject()
function baixaPagina() {
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    }else{
        return esperaAi('Baixei a página', 5000)
    }
}

baixaPagina()
    .then( dadosPagina => {
        console.log(dadosPagina)
    })
    .catch( e => {
        console.log('Error: ', e);
    })

