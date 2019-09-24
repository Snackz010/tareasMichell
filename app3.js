/*
Escriba un programa que cuente con funciones para sumar, restar y multiplicar. Este
debe seguir las siguientes condiciones (nota: implementar las funciones para asegurar
su funcionamiento):

o La función suma se deberá realizar con la declaración de una función explícita de
JavaScript.
o La función resta se deberá realizar con la declaración de una función anónima
asignada a una variable o constante.
o La función multiplicación se deberá realizar haciendo uso de un Arrow
Functions.
*/

var btnSUM = document.getElementById("btnSUM");
var btnSUB = document.getElementById("btnSUB");
var btnMUL = document.getElementById("btnMUL");


var _Num1, _Num2;


var divResult = document.getElementById("result");
   

function sum() {
    _Num1 = document.getElementById("ipt1").value;
    _Num2 = document.getElementById("ipt2").value;
    divResult.innerText = `Resultado: ${(parseInt(_Num1)+parseInt(_Num2))}`; 
}

btnSUB.addEventListener("click",function() {
    _Num1 = document.getElementById("ipt1").value;
    _Num2 = document.getElementById("ipt2").value;
    divResult.innerText = "Resultado: " + subs(_Num1, _Num2);
});

 var subs = function (num1,num2) {

    _Num1 = document.getElementById("ipt1").value;
    _Num2 = document.getElementById("ipt2").value;
    return num1 -num2;
}


btnMUL.addEventListener("click",() => {
    _Num1 = document.getElementById("ipt1").value;
    _Num2 = document.getElementById("ipt2").value;
    divResult.innerText = "Resultado: " + _Num1 * _Num2;
});