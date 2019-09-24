/*
Escriba un programa que almacene las edades de 10 personas en un arreglo, luego lo
recorra haciendo uso del ciclo for y muestre un mensaje en la consola diciendo si es
mayor o menor de edad.
*/


var Ages = [], max = 40, min = 1;

//console.log(Math.floor(Math.random() * (max - min)) + min);

var btn = document.getElementById("btnDO");
var btnPU = document.getElementById("btnPU");

btn.addEventListener("click",function() {

    console.clear();

    for (let index = 0; index < 10; index++) {
        
        Ages.push(Math.floor(Math.random() * (max - min) + min));
        
        if (Ages[index] >= 18)
            console.log(`${(index+1)}° Edad: ${Ages[index]} --> Es mayor de edad`);
        else
            console.log(`${(index+1)}° Edad: ${Ages[index]} --> Es menor de edad`);
    }   
    btnPU.style.display = 'inline';
});


/* 
Escriba un programa que almacene 10 números en un arreglo, luego lo recorra
haciendo uso de un ciclo while y muestre un mensaje en la consola diciendo si es par
o impar.
*/

var Numbers = Ages;
btnPU.addEventListener("click",function() {

    console.clear();
    let i = 0;
    while (i < Numbers.length) {
        if (Numbers[i]%2 == 0) 
            console.log(`El numero ${Numbers[i]} Es un número Par`);
        else
            console.log(`El numero ${Numbers[i]} Es un número Impar`);
    

        i++;    
    }
});