let yeardays = 365;
let days = []
var c;
for(c = 1; c < yeardays; c++){
    days.push(c);
};

var now = new Date

let diadasemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'][now.getDay()]










//DIA E MÊS

let dia = now.getDate();

let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][now.getMonth()]



var mesescolhido = 1;
let mesnumero;
let mesesDia = [31,59,90,120,151,181,212,243,273,304,334,365];

if(mesescolhido < 1){
    mesnumero = 0;
}else{mesnumero = mesesDia[mesescolhido - 1]}




console.log(mesnumero);

let somabraba = mesnumero + dia;

let calcporcentagem = (somabraba*100)/yeardays;

console.log(somabraba);
console.log(calcporcentagem.toFixed(2) + '%');

let porcentagem = calcporcentagem.toFixed(2) + '%';




//console.log(("Hoje é " + diadasemana + ", " + now.getDate() + " de " + mes + " de " + now.getFullYear() ))
let ano = now.getFullYear();

let datatexto = document.getElementById('data-texto');

let fullBar = document.getElementById('full-bar');

datatexto.innerHTML = `Hoje é ${diadasemana}, ${dia} de ${mes} de ${ano}`;


fullBar.style.width = porcentagem;
document.getElementById('perce').innerHTML = porcentagem






