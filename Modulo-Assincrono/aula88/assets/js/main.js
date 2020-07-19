/**
 *  Refatoração do codigo de requisição do exercicio anterior sobre XMLHttpRequest
 *  Utilização de Fetch API(GET) para melhor utilização 
 **/

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
  
    try {
        const response = await fetch(href);
        if (response.status >= 200 && response.status < 300) throw new Error('Erro 404 nosso');
        
        const html = await response.html;
        carregaPesultado(html);
    } catch (error) {
        console.error(error);
    }
}

function carregaPesultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response; 
}