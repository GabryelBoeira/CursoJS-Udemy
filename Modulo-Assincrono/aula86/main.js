/** 
 * Async e Await em js
 * Promises possuem três principais estados
 * pending -> pendente
 * fulfilled -> resolvido
 * reject -> rejeitado
 **/ 

function radom(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min );
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string')  return reject('BAD VALUE');
            // permitido passar um unico parametro
            
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

/** 
esperaAi('Fase 1', radom())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', radom());
    })
    .then( fase => {
        console.log(fase);
        return esperaAi('Fase 3', radom());
    })
    .then( fase => { 
        console.log(fase);
        return fase;
    })
    .then( fase => {
        console.log('Terminamos na fase: ', fase);
    })
    .catch( e => console.log(e));
*/
// Utilizando Async e Await

async function executaAi() {
    try {
        //tratando erro em caso particular
        const fase1 = await esperaAi(1, radom()).catch(e => console.log(e));
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', radom());
        console.log(fase2);
        
        const fase3 = await esperaAi('Fase 3', radom());
        console.log(fase3);
        
        console.log('Terminamos na fase: ', fase3);
    } catch (error) {
        console.log(error);
    }
}
executaAi();


