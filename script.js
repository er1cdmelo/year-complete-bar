let yeardays = 365;
let days = []
var c;
for(c = 1; c < yeardays; c++){
    days.push(c);
};

var now = new Date

let diadasemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()]










//DIA E MÊS

let dia = now.getDate();

let mes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()]



var mesescolhido = now.getMonth();
let mesnumero;
let mesesDia = [31,59,90,120,151,181,212,243,273,304,334,365];

if(mesescolhido < 1){
    mesnumero = 0;
}else{mesnumero = mesesDia[mesescolhido - 1]}




console.log('mesnumero> ' + mesnumero);

let somatotal = mesnumero + dia;
console.log('soma total> ' + somatotal)
let calcporcentagem = (somatotal*100)/yeardays;
console.log('yeardays> ' + yeardays)
console.log(somatotal);
console.log(calcporcentagem.toFixed(2) + '%');

let porcentagem = calcporcentagem.toFixed(2) + '%';




//console.log(("Hoje é " + diadasemana + ", " + now.getDate() + " de " + mes + " de " + now.getFullYear() ))
let ano = now.getFullYear();

let datatexto = document.getElementById('data-texto');

let fullBar = document.getElementById('full-bar');

datatexto.innerHTML = `Today is ${diadasemana}, ${mes} ${dia}, ${ano}`;


fullBar.style.width = porcentagem;
document.getElementById('perce').innerHTML = porcentagem;
document.getElementById('title').innerHTML = '2022 is ' + porcentagem