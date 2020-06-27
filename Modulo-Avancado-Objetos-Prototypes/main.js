// Factory Functions com Prototypes 

// desacoplar as funções
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}

function criaPessoa(nome, sobreNome) {
    //const pessoaPrototype = {...falar, ...comer, ...beber}
    const pessoaPrototype = Object.assign({}, falar, comer, beber);

    return Object.create(pessoaPrototype, {
        nome: {value : nome},
        sobreNome: {value : sobreNome},
    });
}

const p1 = criaPessoa('Gabryel', 'Boeira');
p1.falar();