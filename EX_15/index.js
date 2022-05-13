var val = [9];
var contN = 0;
var contP = 0;
for(var i = 0; i < 10; i++) {
    val[i] = parseInt(window.prompt('Insira o valor '+(i+1)+' :'));
    if(val[i] < 0){
        contN +=1;
    }else{
        contP +=1;
    }
}
document.write('Quantidade de valores NEGATIVOS: ', contN);