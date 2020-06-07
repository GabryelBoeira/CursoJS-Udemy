// Intervalos de tempo 

function retornaHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
    });
}

// Iniciando intervalo de tempo
const timer = setInterval(function () {
    console.log(retornaHora());
}, 1000);

// Finalizando o intervalo de tempo 
setTimeout(function () {
    clearInterval(timer);
}, 5000);