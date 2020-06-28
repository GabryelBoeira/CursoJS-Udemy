// Utilizando Promises em js
function radom(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min );
}

function esperaAi(msg, tempo) {
                      //aprovar, rejeitar por padrão JS utilizar (resolve, reject)
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string')  reject('BAD VALUE');

        setTimeout(() => {
            // permitido passar um unico parametro
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com db', radom(1, 3))
    .then(resposta => { 
        console.log(resposta)
        return esperaAi('Buscando dados da BASE', radom(1, 3));
    })
    .then(resposta => { 
        console.log(resposta);
        return esperaAi(22222222, radom(1, 3));;
    })
    .then(resposta => { 
        console.log(resposta);
    })
    .then(() => { 
        console.log('Exibindo resultado');
    })
    .catch( e => {
        console.log('Erro: ', e)
    });
