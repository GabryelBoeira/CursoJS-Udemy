function relogio(){
    const relogio = document.querySelector('.js-relogio');
    let segundos = 0;
    let timer;

    document.addEventListener('click', function (event){
        
        const el = event.target;
        
        if(el.classList.contains('js-zerar')){
            btnZerar();
        }
        if(el.classList.contains('js-iniciar')){
            btnIniciar();
        }
        if(el.classList.contains('js-pausar')){
            btnPausar();
        }
    });

    function getFormatTimer(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            timeZone: 'UTC',
            hour12: false
        });
    }

    const startTimer = () => { 
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getFormatTimer(segundos);
        }, 1000);
    }

    const btnIniciar = () => {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startTimer();
    }

    const btnPausar = () => {
        clearInterval(timer);
        relogio.classList.add('pausado');
        relogio.innerHTML = getFormatTimer(segundos);
    }

    const btnZerar = () => {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;    
        relogio.innerHTML = getFormatTimer(segundos);
    }
}

relogio();