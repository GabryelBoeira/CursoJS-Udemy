// atribuição de desestruturação em objetos

const pessoa = {
    nome: 'Gabryel',
    sobreNome: 'Boeira',
    idade: 21,
    endereco : {
        rua: 'Av Getulio Vargas',
        numero: 10
    }
};

//atribuição normal
const nomeNormal = pessoa.nome;
console.log(nomeNormal);

//atribuição de desestruturação
const { nome, sobreNome } = pessoa; // com objetos utilizar sempre {}
console.log(nome, sobreNome);

//atribuição de desestruturação com valor default
const { cpf = 'CPF Não Cadastrado', sobreNome: sobreNome1} = pessoa; // com objetos utilizar sempre {}
console.log(cpf, sobreNome1);

//atribuição de desestruturação com objetos internos
const { endereco: {rua: r = 'Não Encontrado', numero }} = pessoa; // com objetos utilizar sempre {}
console.log(r, numero);


//atribuição de desestruturação com operator rest (...)
const { nome: nomeResto, ...resto } = pessoa; // com objetos utilizar sempre {}
console.log(nomeResto + ' Objeto : ', resto);