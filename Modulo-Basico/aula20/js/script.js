function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const pessoas = [];
    /**
     * // forma para desativar comportamento do navegador para o submit em questão
     *  form.onsubmit = function(evento){
     *      evento.preventDefault();       
     *  };
     */ 
    function createPerson (nome, sobreNome, peso, altura) {
        return {nome, sobreNome, peso, altura };
    };

    form.addEventListener('submit', function receivesEvent(event){
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobreNome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push(createPerson(nome.value, sobreNome.value, peso.value, altura.value));
      
        result.innerHTML  += `<p>${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}</p>`;
    });   
}

meuEscopo();