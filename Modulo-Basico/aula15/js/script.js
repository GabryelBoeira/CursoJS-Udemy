// Exercicio sobre a biblioteca Math

const value = Number(prompt('Informe um número para a realização de calculos'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = value;
texto.innerHTML += `<p> Raiz Quadrada é : ${Math.sqrt(value)} </p>`;
texto.innerHTML += `<p> ${value} é um número inteiro : ${Number.isInteger(value)}</p>`;
texto.innerHTML += `<p> É um NaN: ${Number.isNaN(value)}</p>`;
texto.innerHTML += `<p> Valor com arredondamento para baixo : ${Math.floor(value)}</p>`;
texto.innerHTML += `<p> Valor com arredondamento para cima : ${Math.ceil(value)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais : ${value.toFixed(2)}</p>`;