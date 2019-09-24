/*
Escriba un programa que declare 3 variables globales, asigne un valor a las primeras
dos y en la tercera variable asigne la suma de las primeras dos. Realice otros dos
programas que hagan lo mismo, uno con variables locales y otro con constantes.
*/

var _1Num = 20, _2Num = 10, Res;
var i = 0;

var btn = document.getElementById("btnDO");

btn.addEventListener('click',function () {
    if (i == 0){
        Res = _1Num + _2Num;
        console.log("Resultado de variables globales: " + Res);
        i = 1;
    }
    else if(i == 1) {
        var _1numL = 40, _2numL = 60, ResL;
        ResL = _1numL + _2numL;
        console.log("Resultado de variables locales: " + ResL);
        i = 2
    }
    else if (i == 2) {
        const _1numC = 5, _2numC = 5, ResC = _1numC + _2numC;
        console.log("Resultado de constantes: " + ResC);
        i = 0;
    }
});