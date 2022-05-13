var tipo = window.prompt('Qual é o tipo de combustivel? A - Alcool e G - Gasolina');
var litros = Number.parseFloat(window.prompt('Quantos litros de combustivel?'));

var preço;

if (tipo = 'A' || 'a'){
    if (litros <= 20){
        preço = litros * (0.97 * 2.90);
    }
    if (litros > 20){
        preço = litros * (0.95 * 2.90);
    }
}
document.write(`o preço do combustivel foi de R$${preço}`);

if (tipo = 'G' || 'g'){
    if (litros <= 20){
        preço = litros * (0.96 * 3.30);
    }
    if (litros > 20){
        preço = litros * (0.94 * 3.30);
    }
}
document.write(`o preço do combustivel foi de R$${preço}`);