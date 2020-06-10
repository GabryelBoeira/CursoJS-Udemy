/** constructor functions
 * Começa com letra Maiscula 
 * Necessida de na função new 
 * 
 **/

function Pessoa(nome, sobreNome){
    //atribudos privados 
    const ID = 12034;
    const validaCpf = () => {
        console.log('CPF OK')
    }

    // Atribudos publicos
    this.nome = nome;
    this.sobreNome = sobreNome;

    //criação de metodo
    this.falaOi = () => {

        console.log('Olá ' + this.nome);
        validaCpf();
    };
}

const p1 = new Pessoa('Gabryel', 'Boeira');
const p2 = new Pessoa('Maria', 'Joaquina');

p1.falaOi();
