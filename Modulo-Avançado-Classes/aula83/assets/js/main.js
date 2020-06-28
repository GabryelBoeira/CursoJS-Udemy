// Criação de formulario com classes
class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const validFields = this.isValidField();
        const validPassword = this.validPasswords();

        if(validFields && validPassword){
            alert('formulário enviado');
            this.formulario.submit();
        }
    }

    isValidField() {
        ValidaFormulario.removeValidError(this.formulario.querySelectorAll('.error-text'));
        let valid = true;       

        for(let campo of this.formulario.querySelectorAll('.form-Field')){
            if(!campo.value){
                let label = campo.previousElementSibling.innerHTML;
                ValidaFormulario.createErrorField(campo, `Campo ${label} não pode estar em Branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.isValidCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.isValidUser(campo)) valid = false;
            }
        }
        return valid;
    }

    validPasswords() {
        let valid = true

        const senha = this.formulario.querySelector('.senha');
        const repitirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value.length < 6 || senha.value.length > 12){
            ValidaFormulario.createErrorField(senha, 'Senha deve possuir 6 á 12 caractéres');
            valid = false;
        }

        if(senha.value !== repitirSenha.value){
            ValidaFormulario.createErrorField(senha, `Senhas não são iguais`);
            ValidaFormulario.createErrorField(repitirSenha, `Senhas não são iguais`);
            valid = false;
        }


        return valid;
    }

    isValidUser(campo){
        const user = campo.value;
        let valid = true;
        
        if(user.length < 3 || user.length > 12) {
            ValidaFormulario.createErrorField(campo, `Usuário precisa ter entre 3 e 12 caracteres`);
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            ValidaFormulario.createErrorField(campo, `Nome de usuário precisa ter letras e/ou números`);
            valid = false;
        }
        return valid;
    }

    isValidCPF(campo){
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valido()){
            ValidaFormulario.createErrorField(campo, `CPF inválido`);
            return false;
        }
        return true;
    }

    static removeValidError(form){        
        for(let errorText of form){
            errorText.remove();
        }
    }

    static createErrorField(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();