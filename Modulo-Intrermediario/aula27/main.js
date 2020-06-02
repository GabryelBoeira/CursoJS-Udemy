/* 
    Trabalhando com o objeto Date
    Trabalhando com construdores 
    // Link para referencia completa : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
//conversão para data em ano (obrigatorio), mes (obrigatorio de 0 a 11), dia, hora, minutos, segundos e milésimo de segundo 
const date = new Date(2020, 5, 2, 16, 55); 
console.log(date.toString());

// coversão por objeto
const date2 = new Date('2020-06-02 17:00:59.100'); 
console.log(date2.toString());

//Obter informações 
console.log('Dia', date2.getDate());
console.log('Mês', date2.getMonth() + 1); //Mês começa no 0 - Janeiro, 11 - Dezembro
console.log('Ano', date2.getFullYear());
console.log('Hora', date2.getHours());
console.log('Minutos', date2.getMinutes());
console.log('Segundo', date2.getSeconds());
console.log('Milésimo de S.', date2.getMilliseconds());
console.log('Dia da Semana', date2.getDay() + 1); // 0 - Domingo, 6 - Sabado

// converter data para padrão brasil
function converterDate(dateParse){

    const dia = adicionarZeroEsquerda(dateParse.getDate());
    const mes = adicionarZeroEsquerda(dateParse.getMonth() + 1); //Mês começa no 0 - Janeiro, 11 - Dezembro
    const ano = adicionarZeroEsquerda(dateParse.getFullYear());
    const hor = adicionarZeroEsquerda(dateParse.getHours());
    const min = adicionarZeroEsquerda(dateParse.getMinutes());
    const seg = adicionarZeroEsquerda(dateParse.getSeconds());

    return `${dia}/${mes}/${ano} ${hor}:${min}:${seg}`
}

function adicionarZeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
console.log(converterDate(date2));