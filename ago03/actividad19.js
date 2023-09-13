/* Abraham Josafat Domínguez Juárez */


/* A partir de él siguiente array de edades nos solicitan realizar lo siguiente */
const edades = [33, 27, 34, 30, 34, 25];

/* Desarrollar una función que ordene internamente de forma ascendente
 las edades, la misma deberá retornar él array ordenado */

function ordenarAsc(array){

    /* Desempaquetamos los valores del arreglo y los guardamos en uno nuevo, así creamos
       un arreglo nuevo que no altera al original, no funciona para arreglos de arreglos */

    let copy = [...array]
    for(let i = 0; i < copy.length; i++){

        /* Restamos 1 porque j + 1 no puede superar la longitud del arreglo*/
        /* Ya que estamos seguros de que el último elemento estará en su posición correcta
            vamos descontando su posición, así optimizamos */

        for(let j = 0; j < copy.length - i - 1; j++){
            a = copy[j];
            b = copy[j+1];
            if(a > b){
                copy[j+1] = a;
                copy[j] = b; 
            }
        }
    }
    return copy
}

/*Desarrollar una función que ordene internamente de forma descendente
 las edades, la misma deberá retornar él array ordenado */

console.log(ordenarAsc(edades))

function ordenarDesc(array){
    let copy = [...array]
    for(let i = 0; i < copy.length; i++){
        for(let j = 0; j < copy.length - i - 1; j++){
            a = copy[j];
            b = copy[j+1];
            if(a < b){
                copy[j+1] = a;
                copy[j] = b; 
            }
        }
    }
    return copy
}

console.log(ordenarDesc(edades))

/*Dado un array de strings: */

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

/*¿Cómo pudieras ordenar el array anterior, alfabéticamente? */

console.log(ordenarAsc(letras))

/*A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:*/

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]


/*
Desarrollar una función que ordene internamente de forma ascendente 
según él saldo de cada cuenta, la misma deberá retornar él array ordenado .

Desarrollar una función que ordene internamente de forma ascendente 
según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.
*/

function ordenarPorAtributo(arregloObjeto, propiedad, asc = true){
    for(let i = 0; i < arregloObjeto.length; i++){
        for(let j = 0; j < arregloObjeto.length - i -1; j++){
            a = arregloObjeto[j];
            b = arregloObjeto[j+1];
            switch(asc){
                case true:
                    if(a[`${propiedad}`] > b[`${propiedad}`]){
                        arregloObjeto[j+1] = a;
                        arregloObjeto[j] = b; 
                    } 
                    break;
                case false:
                    if(a[`${propiedad}`] < b[`${propiedad}`]){
                        arregloObjeto[j+1] = a;
                        arregloObjeto[j] = b; 
                    } 

            }       
        }
    }
}

ordenarPorAtributo(arrayCuentas, "saldo", asc=false)

console.log(arrayCuentas)

ordenarPorAtributo(arrayCuentas, "edadTitular", asc=false)

console.log(arrayCuentas)