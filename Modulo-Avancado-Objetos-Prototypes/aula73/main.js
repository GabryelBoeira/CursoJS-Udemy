// Trabalhando com herança em Prototypes

// Produto = aumento, desconto 

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * ( percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * ( percentual / 100));
};

// Produto -> Camiseta = cor
// Criando a camiseta 

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
    
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(quantia){
    this.preco += quantia;
};

const camiseta = new Camiseta('Regata', 15, 'Amarelo');
camiseta.aumento(10);
console.log(camiseta);

// Produto -> Caneca = material
// Criando a Caneca
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;

            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca 350mL', 15, 'Vidro', 10);
console.log(caneca);

