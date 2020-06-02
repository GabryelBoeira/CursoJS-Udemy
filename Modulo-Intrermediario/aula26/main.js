// Operações ternarias 

const pontualcaoUsuario = 1000;
const nivelUsuario = pontualcaoUsuario >= 1000 ? 'Usuário VIP':' Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'blue';

console.log(corPadrao, nivelUsuario);
