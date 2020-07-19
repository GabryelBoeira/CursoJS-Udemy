/**
 * Utilização de Fecth API/Axios, para leitura de arquivo com dados
 * 
 **/

/** simula uma integração para API qualquer utilizando Fecth , .json para uso de estudo
 * fetch('pessoas.json')
 *   .then( response => response.json())
 *   .then( json => carregaListaPessoas(json));
**/
// simula uma integração para API qualquer utilizando axios , .json para uso de estudo
axios('pessoas.json')
    .then( response => carregaListaPessoas(response.data));

function carregaListaPessoas(json){
    const resultado = document.querySelector('.resultado');
    const tbody = document.createElement('tbody');
    
    for(let pessoa of json){
        const tr = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);
        
        tbody.appendChild(tr);
    }    
    resultado.appendChild(tbody);
    resultado.classList.add('table');
}