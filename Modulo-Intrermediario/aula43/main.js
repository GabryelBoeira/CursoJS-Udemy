// Try/Catch e throw formas de tratamento e utilização 

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){

        throw('X e Y precisão ser Números ');
    }
    return x + y;
}

try {
    
    console.log(soma('a' , 2));
} catch (error) {
   console.log(error);
}

