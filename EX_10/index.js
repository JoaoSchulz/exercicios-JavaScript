var nome = (window.prompt('Digite o nome'));
var nascimento = Number(window.prompt('Digite o ano de nascimento'));
var ingresso = Number(window.prompt('Digite o ano de ingresso na empresa'));

var idade = 2022 - nascimento;
var trampo = 2022 - ingresso;

if (idade >= 65) {
    document.writeln(`Trabalha a ${trampo}\n`);
    document.writeln(`A idade é ${idade}\n`);
    document.writeln(`Requerer Aposentadoria \n`);
}
if (trampo >= 30) {
    document.writeln(`Trabalha a ${trampo}\n`);
    document.writeln(`A idade é ${idade}\n`);
    document.writeln(`Requerer Aposentadoria\ \n`);
}
if ((idade >=60) && (trampo >= 25)){
    document.writeln(`Trabalha a ${trampo} \n`);
    document.writeln(`A idade é ${idade} \n`);
    document.writeln(`Requerer Aposentadoria \n`);
}
if ((idade < 60) && (trampo < 25)){
    document.write(`Nao Requerer \n`);
}
