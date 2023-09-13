// Abraham Josafat Dominguez Juarez
function mostrar(n, fin = n + 10, salto = 1){
    for(let i = n; i <= fin;  i = i + salto){
        console.log(i)
    }
}

// mostrar(5, fin = 20, salto = 3)

function sumatoria(n, inicio = 1){
    let suma = 0;

    /*
    suma = n*(n+inicio)/2; //suma de gauss
    */

    for(let i = inicio; i <= n; i++){
        suma += i;
    }

    return suma;
}

//console.log(sumatoria(100))

function factorial(n){
    let fact = 1;
    for(let i = 1; i<= n; i++){
        fact *= i;
    }

    return fact
}


function fibonacci(n){
    let suma = 0; // F(0) = 0
    let val_anterior_1 = suma;
    let val_anterior_2 = 1; // Aunque no sea el valor anterior, requerimos que sea 1 para que empiece

    
    for(let i = 0; i < n; i++){ 
        
        console.log(suma)
        suma += val_anterior_2;  // Sumamos al valor de dos pasos antes Fn = Fn-1 +Fn-2
        val_anterior_2 = val_anterior_1; // Despues de la suma se da un paso Fn-2 -> Fn-1
        val_anterior_1 = suma; //Guardamos el nuevo valor Fn-1 -> Fn
        
    }
}

fibonacci(3)