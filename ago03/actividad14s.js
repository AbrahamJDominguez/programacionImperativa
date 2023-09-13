/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
    [1,2,3,4,5],
    [11,22,33,44,55],
    [111,222,333,444,555],
    [1111,2222,3333,4444,5555],
    [11111,22222,33333,44444,55555]
]

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

function sumaMatriz(matriz){
    let suma = 0;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length ; j++){
            suma += matriz[i][j];
        }
    }
    
    return suma
}

console.log(sumaMatriz(matriz))

function crearMatriz(n = 10, m = 10){
    let matriz = [];
    let arreglo = [];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m ; j++){
            arreglo.push( j+1 + 10*i);
        }
        matriz.push(arreglo);
        arreglo = [];
    }

    return matriz

}

console.table(crearMatriz())

function sumaDiagonal(matriz){
    let suma = 0;
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i][i])
        suma += matriz[i][i];
    }
    return suma;
}

console.log(sumaDiagonal(crearMatriz()))

function sumaDiagonalInvertida(matriz){
    let suma = 0;
    for(let i = matriz.length - 1; i > -1; i--){
        console.log(matriz[i][matriz.length - 1 - i])
        suma += matriz[i][matriz.length - 1 - i];
    }
    return suma;
}

console.log(sumaDiagonalInvertida(crearMatriz()))