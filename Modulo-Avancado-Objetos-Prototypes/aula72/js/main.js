// Manipulação de prototypies 
// new Object -> Objet.prototype , incluso de maneira automatica nos objetos

// funções literais 
const objA = {
    chaveA: 'A'
    // __proto__: Objet prototype 
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = {
    chaveC: 'C'
    // __proto__: objA
};

// setPrototypeOf(recepidor, doador);
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

// funções construtoras 
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * ( percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * ( percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(15);
console.log('Desconto: ', p1);
p1.aumento(10);
console.log('Aumento :', p1);

const p2 = {
    nome: 'Caneca',
    preco: 10
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(50);

// Criação de objeto literal com prototype 
const p3 = Object.create(Produto.prototype, {
    preco: {
        enumerable: true,
        writable: true,
        value: 10
    },
    nome: {
        enumerable: true,
        writable: true,
        value: 'Blusa'
    }
});
console.log(p3);



