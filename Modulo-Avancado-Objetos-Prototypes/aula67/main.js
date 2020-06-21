// Revisão sobre Objetos 
// Objeto literal e criado pelas chaves
const pessoa = {
    nome: 'Gabryel',
    sobreNome: 'Boeira'
};

// formas de exibir a informação
console.log(pessoa.nome);
console.log(pessoa['sobreNome']);

// Utilizando construdor de objeto
const pessoa1 = new Object();
pessoa1.nome = 'Gabryel';
pessoa1.sobreNome = 'Boeira';
pessoa1.dtNascimento = new Date('1999-04-13');

/**
 * Apagar algum atribudo do objeto
 * delete pessoa1.nome;
 **/ 
// adicionado metodos no objeto
pessoa1.getFalarNome = function() {
    return `${this.nome} está falando o seu nome.`;
}
pessoa1.getCalcularIdade = function() {
    const hoje = new Date();
    return Math.floor(Math.ceil(Math.abs(this.dtNascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
};
console.log(pessoa1.getCalcularIdade());

// Formas de criar Moldes para objetos 
// Factory functions / Constructor funcitons (Obs. Padrão de projetos) / Classes 
function criaPessoa(nome, sobreNome) {
    // Factory fuctions
    return {
        nome,
        sobreNome,
        nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        },
    }
}
const p1 = criaPessoa('Gabryel', 'Boeira');
console.log('Molde: Factory fuction', p1.nomeCompleto());

// Constructor funcitons
function Pessoa(nome, sobreNome){
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobreNome}`;
    };
    Object.freeze(this); // trava objeto para qualquer tipo de alteração
}
const p2 = new Pessoa('Gabryel', 'Boeira');
console.log('Molde: Constructor funciton ', p2.nomeCompleto());















