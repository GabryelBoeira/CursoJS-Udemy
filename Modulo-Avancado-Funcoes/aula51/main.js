// Escopo Lêxico
// E possibilidade de funções utilizarem variaveis e constantes no escopo global
const nome = 'Gabryel';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    falaNome();
}

usaFalaNome();