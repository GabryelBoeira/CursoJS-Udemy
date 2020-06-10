//Calculado criada com base nas factory functions

function criaCalculadora(){
    
    return{
        display: document.querySelector('.display'),

        inicia() {
        
            this.clickBotoes(); 
            this.pressionaEnter();                   
        },

        clickBotoes() {
            //perde o this de dentro do evento
            document.addEventListener('click', (event) => {
                
                const element = event.target;
                
                if(element.classList.contains('btn-num')){
                    
                    this.btnParaDisplay(element.value);
                }

                if(element.classList.contains('btn-clear')){

                    this.clearDisplay();
                }
                
                if(element.classList.contains('btn-del')){

                    this.apagaUm();
                }

                if(element.classList.contains('btn-eq')){

                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        realizaConta(){

            try {               
            
                let conta = this.display.value;
            
                if(conta.match(/[a-zA-Z]/g) === null){
                    // sempre realizar validação ao utilizar eval(), utlizado por não ser algo que represente risco
                    conta = eval(conta);
                }else{
                    
                    alert('Caracteres inseridos de forma invalida');
                    this.clearDisplay();
                }

                this.display.value = String(conta);

            } catch (error) {
                
                this.clearDisplay();
                alert('Não foi possivel realizar a conta');
            }                
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {

                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();