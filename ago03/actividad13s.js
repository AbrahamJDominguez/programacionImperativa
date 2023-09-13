
let mes = 4;
let dias = 0;

switch(mes){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dias = 31;
        break;
    case 2:
        dias = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dias = 30;
        break;
    default:
        dias = 0; 
}

function invertirNumero(numero){
    let numeroString = numero.toString();
    let aux = "";

    for(let i = numeroString.length - 1; i > -1 ; i--){
        aux += numeroString[i];
    }

    return parseFloat(aux);
}


//console.log(invertirNumero(32443))

function encontrarRepetidos(array){
    let repetidos = [];
    let condicion = false;

    // Ciclo para recorrer el arreglo y cambiar el elemento
    for(let i = 0; i < array.length ; i++){
        // Ciclo para verificar si hay elementos repetidos
        for(let j = i + 1; j < array.length; j++){     
            if(array[i] == array[j]){
                // Ciclo para verificar si el elemento ya está en la lista de repetidos
                for(let k = 0; k < repetidos.length; k++){
                    if(array[i] == repetidos[k]){
                        condicion = true;
                    } 
                }
                if(!condicion){
                    repetidos.push(array[i])
                }
            }
        }
    }
    return repetidos;
}

console.log(encontrarRepetidos([3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]));