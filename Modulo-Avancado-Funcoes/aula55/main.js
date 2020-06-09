// factory functions, são funções que retorna objetos 
function criaPessoa(nome, sobreNome, altura, peso){

    return {
        nome,
        sobreNome,
        peso,
        altura,
       
        fala(assunto){
            return `${this.nomeCompleto} está ${assunto}.`;
        },

        get nomeCompleto(){
          
            return `${this.nome} ${this.sobreNome}`;
        },

        set nomeCompleto(valor){

            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ');
        },

        get imc(){

            return 'Imc : ' + (this.peso / (this.altura ** 2)).toFixed(2);
        },
    };
}
const p1 = criaPessoa('Gabryel', 'Boeira', 1.75, 120 );
const p2 = criaPessoa('Maria', 'Joaquina', 1.65, 70 );
console.log(p1.fala('Aprendendo JS'), p1.imc);
console.log(p2.fala('Aprendendo JS'), p2.imc);

p1.nomeCompleto = 'Boeira J. Gabryel ';
p2.nomeCompleto = 'Joaquina Maria';
console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);