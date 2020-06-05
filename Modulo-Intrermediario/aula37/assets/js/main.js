// NodeList e exercicio com o mesmo, e uma estrutura muito similar a um array porem não e 

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff'
}