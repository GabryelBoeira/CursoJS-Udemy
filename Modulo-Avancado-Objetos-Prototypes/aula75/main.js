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
    if (this.cpfLimpo.length !== 11 || this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const cpfValidado = cpfParcial + digito1 + digito2;
    return cpfValidado === this.cpfLimpo;
} 

ValidaCPF.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
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
    return digito <= 9 ? digito : '0';
}

const cpf = new ValidaCPF('427.984.130-60');
console.log(cpf.valida());