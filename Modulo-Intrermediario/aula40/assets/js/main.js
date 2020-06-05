// Execercicio com comparação entre dois numeros

function comparaNum() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', function comparador(evento){
        evento.preventDefault();
        const num1 = form.querySelector('#num1');
        const num2 = form.querySelector('#num2');   

        alert(maxNum(num1.value, num2.value));

    });

    const maxNum= (num1, num2) => num1 > num2 ? `Maior número e : ${num1}` : `Maior número e : ${num2}`;   
}

comparaNum();
