/*
EJERCICIO 1
Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son: 
Si ambos son tipo de dato Number deberá retornar su multiplicación. 
Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
Si ambos son tipo de dato Booleano deberán retornar false.
*/

function verificar(valor1, valor2){
    let tipo1 = typeof(valor1);
    let tipo2 = typeof(valor2);
    let valor;
    
    if(tipo1 == "number" && tipo2 == "number"){
        valor = valor1*valor2;
    }else if (tipo1 == "string" && tipo2 == "string"){
        valor = valor1 + valor2;
    }else if (tipo1 == "boolean" && tipo2 == "boolean"){
        valor = false;
    }
    return valor
}

console.log(verificar(2,3))

/*
EJERCICIO 2
Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
nombre 
apellido
edad
esArgentino (bool)
----------------------------------------------------------------------------------------------------------------------
Declarar un función que reciba al objeto por parámetro:
Si la edad es mayor o igual a 18 años y es argentino, retornará una frase que diga: [nombre] [apellido] vive en Argentina y es mayor de edad.
Si es mayor de edad pero no es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y es mayor de edad.
Si NO es mayor de edad pero es argentino, retornará una frase que diga: [nombre] [apellido]  vive en Argentina y NO es mayor de edad.
Si no es mayor ni es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y NO es mayor de edad.
-----------------------------------------------------------------------------------------
Realizar una función llamada verificacionDeTiposDeDatos que reciba dos valores por parámetro, estos pueden ser String o Booleano. Nuestra función deberá determinar si los valores recibidos son del mismo tipo sin utilizar typeof. Por ejemplo:
Si recibe por parámetro (true, “true”) deberá retornar un mensaje que indique “No son del mismo tipo”
Si recibe por parámetro (false, true) deberá retornar un mensaje que indique “Son del mismo tipo”
Si recibe por parámetro (“true”,”false”) deberá retornar un mensaje que indique “Son del mismo tipo”
Si recibe por parámetro (“false”, false) deberá retornar un mensaje que indique “No son del mismo tipo”

*/

let persona = {
    nombre: "Juanito",
    apellido: "Perez",
    edad: 17,
    esArgentino: true
};

function verificarPersona(sujeto){
    let frase = `${sujeto.nombre} ${sujeto.apellido}`;
    if(sujeto["edad"] >= 18 && sujeto["esArgentino"]){
        frase += ` vive en Argentina y es mayor de edad`
    
    }else if(sujeto["edad"] >= 18 && !sujeto["esArgentino"]){
        frase += ` NO vive en Argentina y es mayor de edad`

    }else if(sujeto["edad"] < 18 && sujeto["esArgentino"]){
        frase += ` vive en Argentina y NO es mayor de edad`

    }else if(!sujeto["edad"] < 18 && !sujeto["esArgentino"]){
         frase += ` NO vive en Argentina y NO es mayor de edad`
    }
    
    return frase
}

console.log(verificarPersona(persona))

function verificacionDeTiposDeDatos(valor1, valor2){
    let mensaje;
    //Verificamos de forma estrica, si el operador ! funciona, entonces podemos asegurarnos que es un booleano
    if(valor1 === valor2 || 
        (!valor1 === valor2) && (valor1 === !valor2) || 
        valor1.length != undefined && valor2.length != undefined){
        mensaje = "Son del mismo tipo"
    }else if(valor1 !== valor2){
        mensaje = "No son del mismo tipo"
    }

    return mensaje
}

valor1 = true

console.log(valor1.length == undefined)
console.log(verificacionDeTiposDeDatos("hola", "false"))

/*
EJERCICIO 3
Crear un array vacío llamado destinos. 
Dados estos tres objetos:
let brasil = {
  cantidadDeVisitas : 3,
  clima: "soleado",
  habitantes: "212 millones"
 }
 let rusia = {
  cantidadDeVisitas : 4,
  clima: "frío",
  habitantes: "144 millones"
 }
 let estadosUnidos = {
  cantidadDeVisitas : 1,
  clima: "nublado",
  habitantes: "329 millones"
 }


Agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
Mostrar por consola el array para ver que contenga esos objetos.
Crea una función que reciba el array destinos como parámetro, e incremente en 1 la cantidad de visitas de cada uno de los destinos, llámala siguienteViaje. 
* Debes utilizar alguna estructura de repetición vista en clase.
 Mostrar por consola el array de destinos antes y después de la ejecución de la función. 
*/

let destinos = [];

let brasil = {
    cantidadDeVisitas : 3,
    clima: "soleado",
    habitantes: "212 millones"
   };

let rusia = {
    cantidadDeVisitas : 4,
    clima: "frío",
    habitantes: "144 millones"
};

let estadosUnidos = {
    cantidadDeVisitas : 1,
    clima: "nublado",
    habitantes: "329 millones"
};
  
destinos.push(brasil, rusia, estadosUnidos);

console.log(destinos);
destinos.len

function siguienteViaje(array){

    
    for(let i = 0; i < array.length; i++){
        array[i].cantidadDeVisitas += 1;
    }

}

siguienteViaje(destinos)

console.log(destinos)


let matriz = [
    [1,2,3],
    [4,5,6]
]

let j = 0;
let linea = "";
for(let i = 0; i < matriz[j].length; i++){
    linea = "";

    for(j; j < matriz.length; j++){
        linea += matriz[j][i] +  " , " 
    }

    console.log(linea)
    j = 0;
}