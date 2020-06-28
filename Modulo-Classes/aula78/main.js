// Criando classes em js

// Criando objeto pessoa com class
class Pessoa {
    constructor (nome, sobreNome){
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

const p1 = new Pessoa('Gabryel', 'Boeria');
p1.falar();

// Criando objeto pessoa com constructor function
function Pessoa2(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando`); 
};

Pessoa2.prototype.beber = function () { 
    console.log(`${this.nome} está bebendo`); 
};

Pessoa2.prototype.comer = function () { 
    console.log(`${this.nome} está comendo`); 
};

const p2 = new Pessoa2('Eduardo', 'Boeria');
p2.falar();