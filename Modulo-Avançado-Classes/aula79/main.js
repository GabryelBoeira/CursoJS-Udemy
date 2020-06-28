// Getters e setters em classes 

let _velocidade = Symbol('velocidade');
class Carro {
    
    constructor(nome){
        this.nome = nome;
        // atributo privato 
        this[_velocidade] = 0;
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(valor){
        if(typeof valor !== 'number' || valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}
const c1 = new Carro('Fusca');
c1.velocidade = 70;

console.log(c1.velocidade);
// Classe pessoa

class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobreNome}`
    }
}

const p1 = new Pessoa('Gabryel','Boeira');
console.log(p1.nomeCompleto);
