let vitorias = 80;
let derrotas = 10;
let nivel;

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}
const saldoVitorias = calcularSaldo(vitorias, derrotas);

if (saldoVitorias <= 10) {
    nivel = 'Ferro';
}else if(saldoVitorias <= 20) {
    nivel = 'Bronze';
}else if(saldoVitorias <= 50) {
    nivel = 'Prata';
}else if(saldoVitorias <= 80) {
    nivel = 'Ouro';
}else if(saldoVitorias <= 90) {
    nivel = 'Diamante';
}else if(saldoVitorias <= 100) {
    nivel = 'Lendário';
}else {
    nivel = 'Imortal';
}


console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);