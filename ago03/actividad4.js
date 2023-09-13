function pulgadasACM(pulgadas){
    return pulgadas * 2.54;
}

function stringAURL(cadena){
    return `https://www.${cadena}.com`;
}

function admirador(nombre){
    return nombre + "!!!";
}

function edadPerro(edadHumano){
    return edadHumano * 7
}

function valorHora(sueldo){
    return sueldo/40;
}

function calculadorIMC(peso, altura){
    return peso/altura**2;
}

console.log(calculadorIMC(3,4))