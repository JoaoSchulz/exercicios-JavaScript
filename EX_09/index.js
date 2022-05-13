var time1 = (window.prompt('Digite o nome de um time'));
var gol1 = Number(window.prompt('Digite o numero de gol desse time'));
var time2 = (window.prompt('Digite o nome de um segundo time'));
var gol2 = Number(window.prompt('Digite o numero de gol desse segundo time'));

if(gol1 > gol2){
    document.write(`O time vencedor é ${time1}`);
}
else{
    document.write(`O time vencedor é ${time2}`);
}
