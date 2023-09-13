// Abraham Josafat Domínguez Juárez

const prompt = require("prompt-sync")();

function ejercicioEdad(){
    edad = prompt("Ingresar edad: ");

    /*
    Podemos dejarlo como while para que insista con el ciclo hasta
    que ingrese un valor correcto
    */

    while (edad < 0){
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
        edad = prompt("Ingresar edad: ");
    }  

    if(edad < 18) {
        console.log("No puede pasar al bar.")
    } else if (edad < 21){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else {
        console.log("Puede pasar al bar y tomar alcohol.")
    }

    if(edad % 2 == 1){
        console.log("¿Sabías que tu edad es impar?")
    }
}

function totalAPagar(vehiculo, litrosConsumidos){
    let precio = 0;
    switch(vehiculo){
        case "coche":
            precio = 85;
            break;
        case "moto":
            precio = 70;
            break;
        case "autobus":
            precio = 55;
            break;
    }

    if(litrosConsumidos > 0 && litrosConsumidos <= 25){
        return litrosConsumidos * precio + 50
    } else if (litrosConsumidos > 25){
        return litrosConsumidos * precio + 25
    } else {
        return 0
    }
}

function datosSandwich(){
    base = prompt("Ingresar sandwich base: ");
    pan = prompt("Ingresar tipo de pan: ");
    queso = prompt("Agregar queso adicional?").toLowerCase() == "si"? true : false ;
    tomate = prompt("Agregar tomate adicional?").toLowerCase() == "si"? true : false ;
    lechuga = prompt("Agregar lechuga adicional?").toLowerCase() == "si"? true : false ;
    cebolla = prompt("Agregar cebolla adicional?").toLowerCase() == "si"? true : false ;
    mayonesa = prompt("Agregar mayonesa adicional?").toLowerCase() == "si"? true : false ;
    mostaza = prompt("Agregar mostaza adicional?").toLowerCase() == "si"? true : false ;
    return base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza
}

function sandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    

    precio = 0;
    switch (base.toLowerCase()){
        case "pollo":
            precio = 150;
            break;
        case "carne":
            precio = 200;
            break;
        case "veggie":
            precio = 100;
            break;}
        
    

    switch (pan){
        case "blanco":
            precio += 50;
            break;
        case "negro":
            precio += 60;
            break;
        case "s/gluten":
            precio += 75
            break;
    }

    

    if(queso){
        precio += 20;
    }

    if(tomate){
        precio += 15;
    }

    if(lechuga){
        precio += 10
    }

    if(cebolla){
        precio += 15    
    }

    if(mayonesa){
        precio += 5    
    }

    if(mostaza){
        precio += 5    
    }

    return precio
}