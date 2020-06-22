/**
 * Mais funções utilizaveis do Object
 * Object.values
 * Object.entries
 * Object.assingn(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 */

const produto = {nome: 'Base', preco: 1.8};
//copiar objeto para outra variavel 
//const outroProduto = { ...produto, materal: 'Porcelana' }; 
const caneca = Object.assign({}, produto, {materal: 'Porcelana'});
caneca.nome = 'Caneca';
console.log("copiar objeto/alterar: ", caneca);

// Utilizando Object.freeze, congela o estato do objeto não sendo possivel realizar alterações no mesmo
console.log("Object.freeze: ", Object.freeze(caneca));

// Utilização do Object.getOwnPropertyDescriptor, exibição a descrição da chave definida no Object.defineProperty
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log("Visualizar as propriedades das chaves", Object.getOwnPropertyDescriptor(produto, 'nome'));

// Utilizando Object.keys, mostra as chaves do objeto
console.log("Mostrar chaves do objetos ", Object.keys(caneca));

// Utilizando Object.values, mostra os valores das chaves do objeto
console.log("Mostrar valores do objetos ", Object.values(produto));

// Utilizando Object.values, mostra os valores das chaves do objeto
console.log("Mostrar chaves e valores do objetos separados em array", Object.entries(produto));
