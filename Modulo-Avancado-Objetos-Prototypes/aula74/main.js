// Validação de CPF 
// Solução 1 

function validacaoCPF(cpf){
    let cpfLimpo = cpf.replace(/\D+/g, ''); 

    if (cpfLimpo === ("00000000000") || cpfLimpo === ("11111111111") || cpfLimpo === ("22222222222") || 
        cpfLimpo === ("33333333333") || cpfLimpo === ("44444444444") || cpfLimpo === ("55555555555") ||
        cpfLimpo === ("66666666666") || cpfLimpo === ("77777777777") || cpfLimpo === ("88888888888") || 
        cpfLimpo === ("99999999999") || (cpfLimpo.length !== 11)){
            return  'CPF utilizado é invalido';
    }
    
    let dig10 = (recebeCpf) => {
        let multiplicador = 10;
        let total = 0;     

        for (let i = 0; i < 9; i++) { 
            total += Number(recebeCpf.slice(i, (i + 1))) * multiplicador ;
            multiplicador--;
        }

        let result = 11 - (total % 11);
        return result <= 9 ? result : 0;
    };

    let dig11 = (recebeCpf) => {
        let multiplicador = 11;
        let total = 0;     

        for (let i = 0; i < 10; i++) { 
            total += Number(recebeCpf.slice(i, (i + 1))) * multiplicador ;
            multiplicador--;
        }

        let result = 11 - (total % 11);
        return result <= 9 ? result : 0;
    };

    try{
        if(dig10(cpfLimpo) ===  Number(cpfLimpo.slice(9, 10)) && dig11(cpfLimpo) ===  Number(cpfLimpo.slice(10, 11))){
            return `${cpf} é um CPF valido`;
        }
        return 'CPF utilizado é invalido';
    } catch(error) {
        return 'Erro ao tentar realizar a validação do cpf';
    }   
}
console.log(validacaoCPF('427.984.130-60'));