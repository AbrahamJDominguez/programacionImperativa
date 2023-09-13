// ABRAHAM JOSAFAT DOMÍNGUEZ JUÁREZ

/*Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
*/

function crearEstructura(verificar = false, indice = 0){
    let estructura = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
    if(verificar){
        console.log(estructura[indice])
    }
    return estructura
}

/*
Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
*/


function convertirMayuscula(array){
    return array.map(x =>  x.toUpperCase())
}


console.log(convertirMayuscula(crearEstructura(verificar=true)))

/*
también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
*/

array1 = crearEstructura()
array2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
function agregar(array1, array2){
    return array1.concat(array2)
}

array3 = convertirMayuscula(agregar(array1, array2))
console.log(array3)

/*
Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.
*/

let videojuego = array3.pop()

console.log(array3)

/*
Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
*/
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];



const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
/*
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
*/

function comparar(array1, array2){
    let condiciones = []
    if(array1.length == array2.length){
        for(let i = 0; i < array1.length; i++){
            if(array1[i] == array2[i]){
                console.log("Las la calificacion de la pelicula " + array3[i] + " es igual en ambas regiones")
                condiciones.push(true)
            }else{
                console.log("Las la calificacion de la pelicula " + array3[i] + " es diferente")
                condiciones.push(false)
            }
        }
    }else{
        condiciones = false
    }
    return condiciones
}

console.log(comparar(asiaScores, euroScores))