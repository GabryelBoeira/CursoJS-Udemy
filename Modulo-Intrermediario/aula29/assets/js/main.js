function exibirData(){
    const conteiner = document.querySelector('.container');

    conteiner.appendChild(createTexteInHtml());
    
    function formaDataTexto(){
        let data = new Date();
        let diaTexto =  getDiaSemana(data.getDay());
        let mesTexto = getMes(data.getMonth());
        
        return `${diaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ás ${data.getHours()}:${data.getMinutes()}`;
    }

    function createTexteInHtml(){
        const h1 = createH1();
        h1.classList.add('h1-hora');
        h1.innerHTML = formaDataTexto();
        return h1;
    }

    function createH1(){
        return document.createElement('h1'); 
    }

    function getDiaSemana(numDiaSemana){
        
        switch (numDiaSemana) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-Feira';                 
            case 2:
                return 'Terça-Feira';
            case 3:                 
                return 'Quarta-Feira';
            case 4:
                return 'Quinta-Feira';
            case 5:
                return 'Sexta-Feira';               
            case 6:
                return'Sabado';                 
            default:
                return '';
        }    
    } 

    function getMes(numMes){

        switch (numMes) {
            case 0:
                return 'Janeiro';                
            case 1:                
                return 'Fevereiro';
            case 2:                               
                return 'Março';
            case 3:               
                return 'Abril';
            case 4:               
                return 'Maio';
            case 5:                
                return 'Junho'; 
            case 6:
                return 'julho';     
            case 7:
                return 'Agosto'; 
            case 8:
                return 'Setmbro';   
            case 9:
                return 'Outubro';                 
            case 10:
                return 'Novembro'; 
            case 11:
                return 'Dezembro'; 
            default:                
                return '';
        }    
    }    
}

exibirData();