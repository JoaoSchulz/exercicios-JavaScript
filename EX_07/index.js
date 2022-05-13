var Numero = Number(window.prompt('Digite um numero de maças que vc deseja comprar'));

if(Numero >= 12){
    var custo = 1 * Numero;
    document.write(`O custo da compra foi de R$${custo},00`);
}
else{
    var custo = 1.30 * Numero;
    document.write(`O custo da compra foi de R$${custo}0`)
}