// Validação de CPF 
// Solução 2 
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        },
    });
}

ValidaCPF.prototype.valida = function() {
    if ((this.cpfLimpo.length !== 11) || this.cpfLimpo === ("00000000000") || this.cpfLimpo === ("11111111111") || 
        this.cpfLimpo === ("22222222222") || this.cpfLimpo === ("33333333333") || this.cpfLimpo === ("44444444444") || 
        this.cpfLimpo === ("55555555555") || this.cpfLimpo === ("66666666666") || this.cpfLimpo === ("77777777777") || 
        this.cpfLimpo === ("88888888888") || this.cpfLimpo === ("99999999999")) return 'false' ;
    
    const cpfParcialDigito1 = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcialDigito1);

    const cpfParcialDigito2 = this.cpfLimpo.slice(0, -1);
    const digito2 = this.criaDigito(cpfParcialDigito2);
    
    if(digito1 === Number(this.cpfLimpo.slice(9, 10)) && digito2 === Number(this.cpfLimpo.slice(10, 11))){
        return true;
    }
    return false;    
} 

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfParcial.length + 1;
    const total = cpfArray.reduce((acumulador, valor) =>{
        acumulador += Number(valor) * regressivo;
        regressivo--;
        return acumulador; 
    }, 0);

    const digito = 11 - (total % 11);
    return digito <= 9 ? digito : 0;
}

const cpf = new ValidaCPF('427.984.130-60');
console.log(cpf.valida());