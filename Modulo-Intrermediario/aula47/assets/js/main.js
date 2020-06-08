// Lista de tarefas
function tarefas(){
    
    const form = document.querySelector('.js-form');
    const tarefas = document.querySelector('.js-tarefas');
    
    form.addEventListener('submit', function(event){
        
        event.preventDefault();
        const tarefa = form.querySelector('#desc-tarefa');
        
        if(tarefa.value){           
            criaTarefa(tarefa.value);
            limpaInput(tarefa);
            salvarTarefas();            
        } else{
            alert('Tarefa não preenchida !!!');
        }     
    });
    
    document.addEventListener('click', function(event){
        const elemento = event.target;
        if(elemento.classList.contains('js-apagar')){
            elemento.parentElement.remove();
            salvarTarefas();
        }
    });

    const criaLi = () =>{
        return document.createElement('li');
    } 

    const criaTarefa = (tarefa) => {

        const li = criaLi();       
        li.innerHTML = tarefa;
        criarBotaoApagar(li);        
        tarefas.appendChild(li);
    };

    function limpaInput(tarefa){
        tarefa.value = '';
        tarefa.focus();
    }

    function criarBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'btn btn-outline-danger js-apagar');
        li.appendChild(botaoApagar);
    }

    function salvarTarefas() {

        const listaTarefas = tarefas.querySelectorAll('li');
        const listaComTarefas = [];

        for(let tarefa of listaTarefas){

            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaComTarefas.push(tarefaTexto);
        }

        const tarefaJSON = JSON.stringify(listaComTarefas);
        localStorage.setItem('tarefas', tarefaJSON);
    }

    function adicionaTarefaSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listaComTarefas = JSON.parse(tarefas);

        for(let tarefa of listaComTarefas){
            criaTarefa(tarefa);
        }
    }
    adicionaTarefaSalvas();
}

tarefas();