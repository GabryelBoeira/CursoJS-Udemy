/**  Prototypes em js
 * Protótipo e o termo utilizado para se referir ao que foi criado pela primeira vez
 * servindo de modelo ou molde para futuras produções
 * 
 * Todos os objetos tem referencia para a propriedade (__proto__) nas funções construtoras.
 * A order de execução na definição de prioridades e procurar primeiro no objeto depois no (__proto__) em caso de funções com o mesmo nome
**/


// Construtora -> molde (classe)
function Pessoa(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
}

// forma de criar funções sem haver a necessidade de ser criada a todo o momento de instânciamento do objeto na proprietade (__proto__)
Pessoa.prototype.estouAqui = 'hahahhhahaha';
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobreNome}`
};

// instância do objeto
const pessoa1 = new Pessoa('Gabryel', 'Boeira');
const pessoa2 = new Pessoa('Eduardo', 'Boeira');
