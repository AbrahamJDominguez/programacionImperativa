/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y 
devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO



function encontrarMultiplos(numero, limite){
    let array = []
    for(i = numero; i < limite; i = i + numero){
        array.push(i)
    }
    return array
}

console.log(encontrarMultiplos(5,50))




/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes

let estudiantes = [
    {nombre: "Juan", 
    notas: [70,70,60,80,90], 
    aprobado: false, 
    
    },
    {nombre: "Beto", 
    notas: [70,70,60,60,50], 
    aprobado: false, 
    },
    {nombre: "Julio", 
    notas: [70,70,70,70,70], 
    aprobado: false, 
    },
    {nombre: "Jack", 
    notas: [0,0,0,0,0], 
    aprobado: false, 
    }
]

// Función para calcular el promedio de notas

function promedio(notas){
    let promedio = 0;
    for(let nota of notas){
            promedio += nota;
    }
    promedio /= notas.length;
    return promedio
}
// Función para determinar si el estudiante aprobó

function aprueba(promedio, aprobatoria = 70){
    return promedio >= aprobatoria
}
// Calcular si los estudiantes aprobaron o no

for(let estudiante of estudiantes){
    estudiante.aprobado = aprueba(promedio(estudiante.notas));
    
}

// Imprimir estado de aprobación de los estudiantes

for(let estudiante of estudiantes){
    console.log(`La aprobacion del estudiante ${estudiante.nombre} es ${estudiante.aprobado}`)
}

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO

arreglo = [1,2,3,4,5,6,7,8,9,10]

i = 0;
suma = 0;
while(i < arreglo.length){
    if(arreglo[i] % 2 == 0){
        suma += arreglo[i];
    }
    i++;
}

console.log(suma)



/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO

function productoImpares(arreglo){
    /*
    Iniciamos el producto en 1 porque es la identidad de la multiplicación (es decir i * a = a)
    */ 
    let producto = 1;

    for(i = 0; i < arreglo.length; i++){
        /*
        Para verificar si es par usamos el modulo del numero con 2, 
        si es 0 es par, 
        si es 1 es impar
        */
        if(arreglo[i] % 2 == 1){
            producto *= arreglo[i]
        }
    }
    return producto
}

console.log(productoImpares([2,4,6,3,7,9]))




/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

let vehiculo = {
    marca : "chevrolet",
    anio : 1967,
    precio: 100000,
    calcularImpuesto: function(){
        if(this.anio < 2010){
            return this.precio * 0.1
        }else{
            return this.precio * 0.05
        }
    }
}

console.log(vehiculo.calcularImpuesto())

