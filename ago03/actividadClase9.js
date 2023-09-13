/* 
    Abraham Josafat Dominguez Juarez
    Daniel Lopez
    Diego Juarez
    Gloria Lopez
    Helen Bernal
    Valeria Alvarez
*/

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(nombre){
        // Búsqueda manual
        /*
        for(let cliente of this.clientes){
            if(nombre == cliente.titularCuenta){
                return cliente;
            }
        }*/
        // Búsqueda con método
        return this.clientes.find(x => x.titularCuenta == nombre);
    
    },
    deposito: function(nombre, saldo){
        let cliente = this.consultarCliente(nombre)
        if(cliente){
            cliente.saldoEnPesos += saldo;
            console.log(`Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`);
        }else{
            console.log("Cliente no encontrado")}
    },
    extraccion: function(nombre, extraer){
        let cliente = this.consultarCliente(nombre)
        if(cliente){
            if(cliente.saldoEnPesos >= extraer){
                cliente.saldoEnPesos -= extraer;
                console.log(`Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`);
            }else{
                console.log("Fondos insuficientes")
            }
    
        }else{
            console.log("Cliente no encontrado");
        }
    }
}

let clienteEncontrado = banco.consultarCliente("Ramon Connell");

console.log(clienteEncontrado);
banco.deposito("Ramon", 100);
console.log(clienteEncontrado)

let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

function propiedadUnica(array, propiedad){
    let unica = []
    for(let elemento of array){
        unica.push({[propiedad]: elemento[propiedad]})
    }
    return unica;
}

console.log(propiedadUnica(array, "nombre"));

let alumno = {
    nombre : "Juanito",
    numeroLegajo: 1234,
    listaNotas: [6,7,4,5,6,8,10],
    promedio: function(){
        promedio = 0;
        for(let nota of this.listaNotas){
            promedio += nota;
        }
        return promedio/this.listaNotas.length 
    },
    aprueba: (notaAprobatoria=7) => alumno.promedio() >= notaAprobatoria
}

console.log(alumno.promedio())
console.log(alumno.aprueba())
console.log(alumno.aprueba(notaAprobatoria=6))
