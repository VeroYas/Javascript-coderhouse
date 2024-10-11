/**
 * OBJETO MATH => nos permite a nosotros a traves de propiedades y metodos,
 * realizar operaciones complejas.
 * 
 * MIN Y MAX
 * Devuelven el valor minimo o maximo respectivamente entre los numeros
 * proporcionados.
 */


let minimo = Math.min(5,10,-3,7);
console.log(minimo)

let maximo = Math.max(5,10,4,20);
console.log(maximo)

//celi=> cuando queremos redondear hacia arriba un numero decimal

let numero = 4.5;
let redondeo = Math.ceil(numero);
console.log(redondeo)

//floor => cuando queremos que se redondee al numero entero mas cercano

let redondeoAbajo = Math.floor(numero);
console.log(redondeoAbajo)

//round => cuando queremos que se redondee al numero entero mas cercano.
// si tenemos un numero qu ese encuentra en la mitad siempres se redondea para arriba.
let redondeoJs = Math.round(numero)
console.log(redondeoJs)

//random => genera un numero pseudoaleatorio que va entre el 0 y el 1
let aleatorio = Math.random();
console.log(aleatorio)

// queremos que los numeros vayan entre el 1 y el 10

//let nuemrosEntreUnoYDiez = Math.floor(Math.random()*(10) + 1)
//let nuemrosEntreUnoYDiez = Math.floor(Math.random()*(10-1) + 1)

let nuemrosEntreUnoYDiez = Math.floor(Math.random()*(10 + 1))
console.log(nuemrosEntreUnoYDiez)

//redondear precios

/*let precioOriginales = [19.99, 5.75, 3.50, 12.30, 7.99];

let preciosRedondeados = precioOriginales.map(precio => Math.floor(precio));
console.log(preciosRedondeados)*/

let precioOriginales = [
    {
        nombre: "jordan",
        precio: 750.30
    },
    {
        nombre: "nike",
        precio: 450.20
    },
    {
        nombre: "addidas",
        precio: 650.25
    }
];

let preciosRedondeados = precioOriginales.map(precio => Math.floor(precio.precio));
console.log(preciosRedondeados)

let sumaTotal = preciosRedondeados.reduce((acumulador, precio) => acumulador + precio);
console.log(sumaTotal)

//POW 
//eleva un numero a una potencia especifica
//let elevado = Math.pow(base, exponente)

//SQRT
//Saca la raiz cuadrada de un numero

let elevado = Math.pow(3,5);
console.log(elevado)

let raiz = Math.sqrt(16);
console.log(raiz)


/**DATE
 * la clase date, se utiliza para trabajar sobre fechas con el tiempo
 * crear
 * manipular
 * formatear
 * calcular cosas relacionadasd con el tiempo
*/

let fechaActual = new Date()
console.log(fechaActual)

//anio, mes, dia,horas, minutos, segundos, milisegundo
//los meses se inician en 0 al 11
let fechaPropia = new Date(2020,4,21,21,19,6);
console.log(fechaPropia)

/**
 * medotos en date permiten obtener la informacion de la fecha
 * esto se hace con la palabra get al inicio
 */

console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDate());
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
console.log(fechaActual.getDay());

//si queremos estableces o setear un dato se usa SET y seteamos la informacion

let fecha = new Date();
fecha.setFullYear(2025);
fecha.setMonth(11);
fecha.setDate(13);
fecha.setUTCHours(23)
console.log(fecha);

function calcularDiferenciasEnDias(fechaInicio,fechaFinal){
    let unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
    let diferenciaEnMilisegundos = fechaFinal - fechaInicio;
    return Math.round (diferenciaEnMilisegundos / unDiaEnMilisegundos);
}

let fechaInicio = new Date (2024,9,1);
let fechaFinal = new Date (2024,9,31);

let diferencia = calcularDiferenciasEnDias(fechaInicio,fechaFinal);
console.log(diferencia);
