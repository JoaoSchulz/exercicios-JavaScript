for (num = 1; num <= 10; num++){
    document.write(`</br>`)
    for(var i = 0; i <=10 ; i++){
        var tab = num * i;
        document.write(`Tabuada do ${num} = ${num} x ${i} = ${tab} </br>`);
    }
}