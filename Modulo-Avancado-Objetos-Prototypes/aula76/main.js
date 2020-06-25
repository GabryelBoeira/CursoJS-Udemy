// Polimorfismo em js

//SuperClass
function Conta(agencia, conta, saldo){
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        this.saldo();
        return ;
    }
    this.saldo -= valor;
     
};
Conta.prototype.depositar = function(valor) {};
Conta.prototype.saldo = function() {};
