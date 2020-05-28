let resultado;
let opcao;
alert('Calcular com dois números');
while (opcao != 0) { 
    
    opcao = prompt('Escolha uma das opçoes: \r 1 - Adição \r 2 - subtração \r 3 - Multiplicação \r 4 - divisão \r 0/vazio - sair');
    opcao = Number(opcao);

    if(opcao >= 4, opcao > 0)
    { 
        if(opcao == 1){
            let num1 = prompt('Digite o primerio número');
            let num2 = prompt('Digite o segundo número');
            resultado = Number(num1) + Number(num2);
        }
        else if(opcao == 2){
            let num1 = prompt('Digite o primerio número');
            let num2 = prompt('Digite o segundo número');
            resultado = Number(num1) - Number(num2);
        }
        else if(opcao == 3){
            let num1 = prompt('Digite o primerio número');
            let num2 = prompt('Digite o segundo número');
            resultado = Number(num1) * Number(num2);
        }
        else if(opcao == 4){
            let num1 = prompt('Digite o Dividendo ');
            let num2 = prompt('Digite o Divisor');
            resultado = Number(num1) / Number(num2);
        }
            alert(`O resultado foi : ${resultado}`);
    }else if(opcao != 0)
    {
        alert('Opção inicial Invalida');
    }else{
        alert('Até Logo');
    }
}