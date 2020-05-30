/**
 * aula sobre objetos 
 **/ 
// maneira pouco reaproveitavel de fazer 
 const pessoa3 = {
    nome: 'Gabryel',
    sobreNome: 'Boeira',
    idade: 21,

    fala() {
        console.log('Ola');
    },
};

pessoa3.fala();

// function factor, pois cria objetos
function criaPessoa (nome, sobreNome, idade) {
    return {nome, sobreNome, idade };
};

const pessoa1 = criaPessoa('Gabryel', 'Boeira', 21);
const pessoa2 = criaPessoa('Gabryel', 'Boeira', 21);

console.log(pessoa1.idade);

