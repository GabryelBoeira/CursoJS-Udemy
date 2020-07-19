// utilizando XMLHttpRequest para mudança de paginas e pegar conteudo

const request = obj => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        //xhr.open('GET', 'URL', true=assincrono/false=sincrono);
        xhr.open(obj.method, obj.url, true);
        xhr.send();// envio de dados, EX: formulario
    
        xhr.addEventListener('load', e => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    })
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if( tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    const href = el.getAttribute('href');
    console.log(href);

    try {
        const objConfig = {
            method: 'GET',
            url: href      
        };
    
        const response = await request(objConfig);
        carregaPesultado(response);        
    } catch (error) {
        console.error(error);
    }
}

function carregaPesultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response; 
}