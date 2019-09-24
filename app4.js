/*Escriba un programa que defina un arreglo con 10 nombres de personas y que tenga
las siguientes funciones (nota: implementar las funciones para asegurar su
funcionamiento):
o Una función que reciba dos parámetros, un arreglo y un nombre de tipo string, y
que retorne un nuevo arreglo filtrado por el parámetro nombre.
o Una función que reciba un parámetro, el nombre de tipo string, y que añada el
nuevo nombre al arreglo en la parte superior de este. Hay que validar que el
nombre no se encuentre vacío.
o Una función que reciba un parámetro, el nombre de tipo string, para que lo busque
dentro del arreglo y, si lo encuentra, que lo remueva.*/


var Names = [
    "Pedro Alfonso Morales Rubio",
    "Camilo José Pérez Duarte",
    "José Eligio Guzmán Flores",
    "Marily De los Angeles Peréz Vallecillo",
    "Martín Alberto Mondragón López",
    "Luis Matheo Selva Montoya",
    "Justin Benítez Suárez",
    "Aurora Cristina Zeledón Benítez",
    "Alexa Gertrudis Pavón Molina",
    "Fátima Candelaria Robleto Chavarria"
];


var btnSearch = document.getElementById("btnSearch");
var btnAdd = document.getElementById("btnAdd");
var btnDelete = document.getElementById("btnDelete");

var divNames = document.getElementById("names");

var Name;

for (let index = 0; index < Names.length; index++) {
    
    divNames.innerText += Names[index]+'\n';
}

btnSearch.addEventListener("click",function() {
    Name = document.getElementById("iptName").value;

    divNames.innerText = "";

    for (let index = 0; index < search(Names,Name).length; index++) {
        
        var searchR = search(Names,Name);
        //console.log(searchR);
        divNames.innerText += searchR[index]+'\n';
    }
});


function search(names,name) {

    var newNames = [];
    for (let index = 0; index < names.length; index++) {
        if (names[index].indexOf(name) >= 0 ) {
            newNames.push(names[index]);
        }
    }
    //console.log(newNames);
    return newNames;
    
}

btnAdd.addEventListener("click",function(name) {

    divNames.innerText = "";
    name = document.getElementById("iptName").value;

    if (name.length > 0) {
        Names.unshift(name);
    }else
        alert("Ops!! El nombre esta en blanco");

    for (let index = 0; index < Names.length; index++) {
    
        divNames.innerText += Names[index]+'\n';
    }
});


btnDelete.addEventListener("click",function() {
    Name = document.getElementById("iptName").value;
    Delete(Name);
});


function Delete(name) {
    var flag = 0;
    for (let index = 0; index < Names.length; index++) {
         
        if (Names[index] == name) {
            Names.splice(index,1);
            divNames.innerText = "";
            flag = 1;
            break;
        }
    }

    if (flag == 0) {
        alert("Opss!!! El nombre no existe");
    }
    for (let index = 0; index < Names.length; index++) {
    
        divNames.innerText += Names[index]+'\n';
    }
}