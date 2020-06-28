// Métodos de instâncias e estáticos 
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }
    
    // Método de instância
    almentaVolume() {
        if(this.volume >= 100) return;
        this.volume += 2;
    }
    
    // Método de instância
    diminuirVolume() {
        if(this.volume <= 0) return;
        this.volume -= 2;
    }    

    // Método estático
    // não possue os dados do construtor
    static trocarPilha() {
        console.log(`Pilha deve ser trocada`);
    }
}

const controle1 = new ControleRemoto('LG');
controle1.almentaVolume();
controle1.almentaVolume();
controle1.almentaVolume();
console.log(controle1);