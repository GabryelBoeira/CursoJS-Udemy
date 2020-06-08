// Declarções de fução (Function hoisting)
// First-class objects (Objetos de primeira classe)
function falaOi() {

    console.log('Olá');
}
falaOi();

//Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaDado(souUmDado){
    console.log('Dado em execução');
    souUmDado();
}

executaDado(souUmDado);
// Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma Arrow function');
}

funcaoArrow();

//Dentro do objeto
const obj = {
    falar(){
        console.log('Estou falando')
    }
};

obj.falar();