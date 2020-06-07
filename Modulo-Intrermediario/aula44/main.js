// Try/Catch/finally 

function retornaHora(data){

    if(data && !(data instanceof Date)){
        throw new TypeError('Esparando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR');
}

try{

    const dataOk = new Date();
    console.log(retornaHora(dataOk));
} catch{
    //tratar erro aqui 
} finally{

    console.log('Tenha um bom dia.')
}

