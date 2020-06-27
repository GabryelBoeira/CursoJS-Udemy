// Polimorfismo em js

//SuperClass
function Conta(agencia, conta, saldo){
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag./c : ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`);
};

// Conta corrente
function ContaCorrente( agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(( this.limite + this.saldo) < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const conta1 = new ContaCorrente(10, 2321, 0, 1000);
conta1.sacar(500);

// Conta Poupança
function ContaPoupanca( agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new ContaCorrente(10, 2321, 1000);