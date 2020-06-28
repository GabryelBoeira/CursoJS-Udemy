// Validação de CPF utilizando classes 
class ValidaCpf {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo' , {
            writable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    valido(){
        if (this.cpfLimpo.length !== 11 || this.cpfLimpo.match(/[a-zA-Z]/g) !== null || this.isSequencia()) return false;
                
        return ValidaCpf.garaNovoCpf(this.cpfLimpo) === this.cpfLimpo;
    }

    static garaNovoCpf(cpfLimpo) {
        const cpfSemDigitos = cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.gerarDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.gerarDigito(cpfSemDigitos + digito1);
        return cpfSemDigitos + digito1 + digito2;
    }

    static gerarDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1; 

        for(let stringNumerica of cpfSemDigito) {
            total += Number(stringNumerica) * reverso;
            reverso--;
        }

        const resultado =  11 - (total % 11);
        return resultado <= 9 ? String(resultado) : '0';
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}
