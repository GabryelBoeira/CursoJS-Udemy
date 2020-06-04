function exibirData(){
    const conteinerH1 = document.querySelector('.container h1');

    conteinerH1.innerHTML = formaDataTexto();
    
    function formaDataTexto(){
        let data = new Date();
        let diaTexto =  getDiaSemana(data.getDay());
        let mesTexto = getNomeMes(data.getMonth());
        
        return `${diaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ás ${data.getHours()}:${data.getMinutes()}`;
    }

    function getDiaSemana(numDiaSemana){
        const diasSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira', 'Sabado']
        return diasSemana[numDiaSemana];
    } 

    function getNomeMes(numMes){
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
                return 'Setembro';   
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