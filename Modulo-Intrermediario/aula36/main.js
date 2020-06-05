// For in(indece)
//com array
console.log('#### For in');

const frutas = ['Maçã', 'Limão', 'Laranja'];

for(let indice in frutas){
    console.log(frutas[indice]);
}

// Com objeto
const pessoa = {
    nome: 'Gabryel',
    sobreNome: 'Boeira',
    idade: 21
};

for(let key in pessoa){
    console.log(key, pessoa[key]);
}

console.log('#### For of');
// For of(valor)
const nomes = ['Gabryel', 'boeira', 'teste', 'array']; 
for(let valor of nomes){
    console.log(valor);
}

console.log('#### ForEach');
// ForEach
nomes.forEach(function(valor, indice){
    console.log(valor, indice)
});