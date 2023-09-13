/* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

*/

misMascotas = []

misMascotas.push({nombre:"Pepito",
    raza:"Labrador",
    edad:3, 
    sonido:"woof",
    hacerSonido:function(){return this.sonido + " " + this.sonido}})

misMascotas.push({nombre:"Juanito",
    raza:"Pastor aleman",
    edad:2, 
    sonido:"guau",
    hacerSonido:function(){return this.sonido + " " + this.sonido}})

function aumentarEdad(array){
    for(let i = 0; i < array.length; i++){
        array[i]["edad"] ++
    }
}

function aumentarEdad2(array){
    for(let elemento of array){
        if (elemento["edad"] < 6){ 
            elemento["edad"] ++
        }else if (elemento["edad"] >=  6 && elemento["edad"] <= 10){
            elemento["edad"] += 2
        }else if (elemento["edad"] > 10){
            elemento["edad"] += elemento["edad"]/2
        }
    }
}

function generarID(array){
    for(let i = 0; i < array.length; i++){
        array[i]["id"] = i + 1
    }
}

console.log(misMascotas[0].hacerSonido())

aumentarEdad2(misMascotas)
generarID(misMascotas)

console.log(misMascotas)

/* PALINDROMO
  Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
  Ejemplo:   
  palindromo("anilina") debe retornar true
  palindromo("Ana") debe retornar true
  palindromo("Enrique") debe retornar false */

function palindromo(palabra){
    palabra = palabra.toLowerCase()
    let aux = palabra.split("").reverse().join("")
    return aux == palabra

}

console.log(palindromo("Ana"))

/* Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
Ejemplo: 
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */

function nuevoArreglo(numero) {
    let arreglo = [];
  
    for (let i = 1; i <= numero; i++) {
      arreglo.push(i);
    }
  
    return arreglo;
  }
  
  console.log(nuevoArreglo(5));

/* 
    LOOP DE IMPARES CON PALABRA
    Debés crear una función llamada loopDeImpares 
    que reciba como parámetro un número y una palabra  
    y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
    Ahora, modificar el código para que, en caso de que ese número sumado con 
    el número pasado por parámetro sea impar, muestre en la consola la palabra 
    pasada por parámetro.
*/

function loopDeImpares(numero, palabra){
    for(let i = 0; i <= 100; i++){
        if((i + numero) % 2 == 1){
            console.log(palabra)
        }else{
            console.log(i)
        }
    }
}