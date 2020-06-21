/**
 * Funções para a personalização das proprietades do atribudo
 * Object.defineProperties() = Permite defirnir varios atributos  
 * Object.defineProperty() = Permite definir um unico atributo
 * 
 **/ 

// defineProperty
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,// leitura do atribudo no objeto 
        value: estoque, // permite a exibição do valor do atribudo e permite a personalização do valor
        writable: false, // Não permite a alteração do valor inicial adicionado ao atribudo
        configurable: true, // permite realizar uma nova configuração no atribudo estoque ex: apagar 
    });
}

const p1 = new Produto('Camiseta', 25, 10);
console.log(p1, 'Configurado com defineProperty');

// defineProperties()
function Produto2(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this, {
        nome:{
            enumerable: true,// leitura do atribudo no objeto 
            value: nome, // permite a exibição do valor do atribudo e permite a personalização do valor
            writable: true, // Não permite a alteração do valor inicial adicionado ao atribudo
            configurable: true, // permite realizar uma nova configuração no atribudo estoque ex: apagar 
        },
        preco:{
            enumerable: true,// leitura do atribudo no objeto 
            value: estoque, // permite a exibição do valor do atribudo e permite a personalização do valor
            writable: false, // Não permite a alteração do valor inicial adicionado ao atribudo
            configurable: false, // permite realizar uma nova configuração ou bloqueio do atribudo ex: apagar 
        }      
    });
}

const p2 = new Produto2('Camiseta 2', 50, 20);
console.log(p2, 'Configurado com defineProperties');