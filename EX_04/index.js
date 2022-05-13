var CustoF = Number.parseFloat(window.prompt('Qual é o valor do custo de fabrica?'));
var Pdistribuidor = 28;
var Pimpostos = 45;

var Vdistribuidor = CustoF + (CustoF * (Pdistribuidor /100));
var Vimpostos = CustoF + (CustoF * (Pimpostos /100));
var CustoConsumidor = CustoF + Vdistribuidor + Vimpostos;

document.write(`O custo do consumidor é ${CustoConsumidor}`);