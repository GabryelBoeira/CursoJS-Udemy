//Calculado criada com base nas constructor functions

function Calculadora(){
    
    this.display = document.querySelector('.display');

    this.inicia = () => {
        clickBotoes(); 
        pressionaEnterDisplay();                   
    };

    const clickBotoes = () => {
        document.addEventListener('click', (event) => {        
            const el = event.target;
            
            if(el.classList.contains('btn-num')) addNumDisplay(el.value);            

            if(el.classList.contains('btn-clear')) clear();
            
            if(el.classList.contains('btn-del')) apagaUm();

            if(el.classList.contains('btn-eq')) realizaConta();        
        });
    };
    
    const addNumDisplay = (valor) => {        
        this.display.value += valor;
        this.display.focus();
    }
    
    const clear = () => this.display.value = '';
    
    const apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    
    const pressionaEnterDisplay = () => {
        document.addEventListener('keypress', (e) => {
            if(e.keyCode === 13) realizaConta();          
        });
    }

    const realizaConta = () => {
        try {                   
            let conta = this.display.value;
            
            // sempre realizar validação ao utilizar eval(), utlizado por não ser algo que represente risco
            if(conta.match(/[a-zA-Z]/g) === null){
                
                this.display.value = eval(conta);
            }else{
                alert('Caracteres inseridos de forma invalida');
                return clear();             
            }         
        } catch (error) {          
            alert('Não foi possivel realizar a conta');
            return clear();
        }                
    };
}

const calculadora = new Calculadora();
calculadora.inicia();