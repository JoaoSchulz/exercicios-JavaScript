var mensal = Number(window.prompt('Qual é o salario atual?'));
var reajuste = Number(window.prompt('Qual é o percentual de reajuste?'));

var salario = mensal * (reajuste/100 + 1);

document.write(`O novo salario é ${salario}`);