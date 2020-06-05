// While e Do While em Js

function random(min, max ){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while(rand !== 10){
    console.log(rand);
    rand = random(min, max);    
}

do {
    rand = random(min, max);
    console.log(rand); 
} while(rand !== 10);
