
var Est_txt = '{"estudiante":['+
'{"codigo": "001","nombre": "Marcos","nota": 4.5},'+
'{"codigo": "002","nombre": "Natalia","nota": 4.8},'+
'{"codigo": "003","nombre": "Esteban","nota": 3.2},'+
'{"codigo": "004","nombre": "Nicolas","nota": 3.5},'+
'{"codigo": "005","nombre": "Gabriela","nota": 4.0},'+
'{"codigo": "006","nombre": "Carlos","nota": 2.0},'+
'{"codigo": "006","nombre": "Jose","nota": 5.0},'+
'{"codigo": "007","nombre": "Dallys","nota": 4.2},'+
'{"codigo": "008","nombre": "Lina","nota": 4.0},'+
'{"codigo": "009","nombre": "Luis","nota": 4.7},'+
'{"codigo": "010","nombre": "Diego","nota": 4.6}'+
']}';

var estudiante = JSON.parse(Est_txt);

//impresion de todo el objeto json
function leerJSON (json){
    var out = "<b>--------------Estudiantes Inscritos--------------</b><br><br>";
    for (var i = 0; i < json.estudiante.length; i++) {
        out +="Codigo: "+json.estudiante[i].codigo+" - "+"Nombre: "+json.estudiante[i].nombre+
        " - "+"Nota: "+json.estudiante[i].nota+"<br>";
    }
    document.getElementById("estudiantes").innerHTML =out;
}

/*Promedio recibe un objeto json, el promedio se cacula por la sumatoria de los valores de la propiedad nota del json y
 dividido por la cantidad de elementos del mismo.*/
function promedio (json){
    var sumatoria=0;
    var nota_promedio=0;
    for (var i in json.estudiante) {
        sumatoria += json.estudiante[i].nota;
        nota_promedio = sumatoria/json.estudiante.length;
    }
    document.getElementById("promedio").innerHTML = "Promedio del curso: "+nota_promedio.toPrecision(2);
}

//Funcion que calcula la maxima nota, recorre el json y acumula las notas que superan el 4.8
function maxNota(json){
    var notas_altas="";
    for (var i in json.estudiante) {
        if(json.estudiante[i].nota>=4.8 ){
            notas_altas += json.estudiante[i].nombre+" - "+ json.estudiante[i].nota+"<br>";
        }
    }
    document.getElementById("notas_altas").innerHTML = "Los estudiantes con la nota más alta son: <br>"+notas_altas;
}

//funcion que obtiene la notas mas bajas, recorre el json y acumula las notas que estan por debajo del 3.0
function minNota(json){
    var notas_bajas="";
    for (var i in json.estudiante) {
        if(json.estudiante[i].nota<=3.0){
            notas_bajas += json.estudiante[i].nombre+" - "+ json.estudiante[i].nota+"<br>";
        }
    }
    document.getElementById("notas_bajas").innerHTML = "Los estudiantes con la nota más baja son: <br>"+notas_bajas;
}
