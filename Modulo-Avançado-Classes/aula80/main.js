// trabalhando herança com classes
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log( `${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }
    
    desligar() {
        if(!this.ligado){
            console.log( `${this.nome} já está desligado`);
            return;
        }
        this.ligado = false;
    }
}
const d1 = new DispositivoEletronico('Celular');
d1.ligar();
console.log(d1);

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // utilizando o construdor do pai para setar o atribudo
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new SmartPhone('Huawei', 'Azul', 'P40 Pro');
s1.ligar();
console.log(s1);

//
class Tablet extends DispositivoEletronico {
    constructor(nome, modelo, temWifi) {
        super(nome); // utilizando o construdor do pai para setar o atribudo
        this.temWifi = temWifi;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`Modo de ligar alterado`);
    }

    falaOi() {
        console.log(`Estou falando oi`);
    }
}

const s1 = new Tablet('Apple', 'iPad Pro', true);
s1.ligar();
console.log(s1);