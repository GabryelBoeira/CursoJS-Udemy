// funções imediatas (IIFE)
// Função que não executada pelo escopo global
(function(idade, altura){
    const sobreNome = 'Boeira';
    function criaNome(nome){
        return nome + ' ' + sobreNome; 
    }

    function falaNome(){
        console.log(criaNome('Gabryel'));
    }

    falaNome();
    console.log(idade, altura);

})(21, 1.75);