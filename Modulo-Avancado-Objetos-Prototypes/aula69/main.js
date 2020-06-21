/**
 * Utilização de getters e setters nas funções de defineProperty
 */

// defineProperty
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoque,
        set: (valor) => {
            if(typeof valor !== 'number') {
                throw new TypeError('Erro ao atualizar o valor.')
            }
            estoque = valor;
        }
        
    });
}

const p1 = new Produto('Camiseta', 25, 10);
p1.estoque = 500;
console.log(p1.estoque);