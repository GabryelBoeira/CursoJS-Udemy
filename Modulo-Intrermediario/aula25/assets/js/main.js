// exercio de calculo de IMC 
function chamaCalculoImc() {

    const form = document.querySelector('#form');
    const resultado = document.querySelector('#result');

    form.addEventListener('submit', function receivesEvent(event){

        event.preventDefault();
        const peso = form.querySelector('#peso');
        const alturaM = form.querySelector('#altura');

        resultado.innerHTML = '';
        resultado.appendChild(calculaImc(peso.value, alturaM.value));   
    });

    function createParagraph(){

        return document.createElement('p'); 
    }

    function resultParagraphErro(msg){

        const compoment = createParagraph();
        compoment.classList.add('error-result');
        compoment.innerHTML = msg;        
        return compoment;   
    }

    function resultParagraphSucess(msg){

        const compoment = createParagraph();
        compoment.classList.add('sucess-result');
        compoment.innerHTML = msg;        
        return compoment;   
    }

    function corfimData(peso, alturaM){
        
        if (Number.isNaN(Number(alturaM))){

            return resultParagraphErro("Altura invalida Ex: 1.75");
        }else if(Number.isNaN(Number(peso))){

            return resultParagraphErro("Peso Invalido Ex: 82.250");
        }
        return null;        
    }

    function calculo(peso, alturaM){

        return (Number(peso) / (Number(alturaM) * Number(alturaM))).toFixed(1);
    }

    function calculaImc(peso, alturaM){

        let status = corfimData(peso, alturaM)
        if(status != null){
            return status;
        }

        let imc = calculo(peso, alturaM);
        
        if(imc >= 39.9){          
            return resultParagraphSucess(`Seu imc é: ${imc} (Obesidade grau 3)`);          
        }
        
        if(imc >= 34.9){
            return resultParagraphSucess(`Seu imc é: ${imc} (Obesidade grau 2)`);           
        }
        
        if(imc >= 29.9){
            return resultParagraphSucess(`Seu imc é: ${imc} (Obesidade grau 1)`);            
        }
        
        if(imc >= 24.9){
            return resultParagraphSucess(`Seu imc é: ${imc} (Sobrepeso)`);
        }
        
        if(imc >= 18.5){
           return resultParagraphSucess(`Seu imc é: ${imc} (Peso normal)`);
        }
        
        if(imc < 18.5){
            return resultParagraphSucess(`Seu imc é: ${imc} (abaixo do peso)`);
        }
    }
}

chamaCalculoImc();