/** Desestructuracion de objetos, es una expresion que nos permite extraer
 * propiedades de un objeto asignandole variables individuales de una
 * manera que sea mas legible
 * 
*/
const persona = {
    nombre: "Natalia",
    edad: 25,
    ciudad: "Cordoba"
};

//desestructuracion
let {nombre, edad} = persona;
console.log(nombre);
console.log(edad)

/** Alias => los alias nos permiten a nosotros cambiar el nombre de las variables al desestructurar
*/
const {nombre: nombreAlias, edad: edadAlias} = persona;
console.log(nombreAlias);

// * Los alias permiten evitar conflictos
// * clarifica el codigo

const persona1 = {
    nombre: "Natalia",
    edad: 25,
    ciudad: "Cordoba"
};

const persona2 = {
    nombre: "Bryan",
    edad: 20,
    ciudad: "Buenos Aires"
};

const {nombre: nombrePersona1} = persona1;
const {nombre: nombrePersona2} = persona2;

console.log(nombrePersona1)
console.log(nombrePersona2)

// Usar alias para desestructurar las propiedades anidadas

const alumno ={
    id: 1,
    info: {
        nombre: "Stefy",
        cursada: "JavaScript"
    }
}

const {info: {nombre: NombreAlumna, cursada:cursadaAlumna}} = alumno;
console.log(NombreAlumna);
console.log(cursadaAlumna)


//Desestructuracion de arrays
//permite extraer valores del array y asignarles de nuevo variables individuales.

const array = [1,2,3];
const[primero, segundo, tercero] = array
console.log(segundo);
console.log(tercero);
console.log(primero)


//se pueden asignasr valores por defecto
//const[ , , tercero, cuarto = 4] = array;

//podemos anidar arrays

const arraysAnidados =[
    1, [2,3], 4
]
const[uno, [dos, tres], cuarto] = arraysAnidados
console.log(dos);

// quiero que variable b = 5 y a = 10

let a = 5;
let b = 10;
[a,b] = [b,a];

console.log ("ahora en a esta", a)
console.log ("ahora en b esta", b)


/**
 * Desestructuracion de parametros
 * permite generar un codigo mucho mas limpio y facil de entender
 * permite extraer valores de objetos o arrays directamente en la declaracion de los parametros de una funcion
 * esto permite que el codigo sea mas limpio y facil de entender, porque podemos trabajar
 * con propiedad y elementos sin necesidad de acceder a cada uno 
*/

const persona3 = {
    nombre: "Micaela",
    edad: 18,
    ciudad: "Cordoba"
};

function mostrarDatos ({nombre, edad}){
    console.log(`nombre: ${nombre}, edad: ${edad}`)
}

mostrarDatos(persona3)


//

const personas = [
    {
        nombre: "Micaela",
        edad: 18
    },
    {
        nombre: "Natalia",
        edad: 28
    },
    {
        nombre: "Franco",
        edad: 17
    },
]

personas.forEach(({nombre, edad})=>{
    console.log(`${nombre}, tiene ${edad} anios`)
})


/**
 *  OPERADOR SPREAD (...)
 * nos permite expandir elemntos de un array u objeto. Se usa para 
 * copiar o cambiar arrays de objetos sin modificar los originales.
 */

const arraysNumeros = [1,2,3,4];
const ArrayNumerosNuevos = [... arraysNumeros, 5,6,7,8];
console.log(ArrayNumerosNuevos)
//
const arraySinConcat = [... arraysNumeros, ArrayNumerosNuevos];
console.log(arraySinConcat)
//
arraysNumeros.push(...ArrayNumerosNuevos)
console.log(arraysNumeros)


//
//

const personaDatosBasicos = {
    nobmre: "Juan",
    apellido: "Dino",
    edad: 30
}

const personasDatosAvanzados = {
    ...personaDatosBasicos,
    info: {
        ciudad:"Mar de Plata",
        direccion:"Boulevard Maritimo",
        numero: 1234
    }
}
console.log (personasDatosAvanzados);

//

/**
 * REST PARAMETERS
 * permite agrupar multiples argumentos, en un array.
 */

function sumar(...numeros){
    return numeros.reduce((total, num) => total + num,0);
}
console.log(sumar(1,2,3,4,5,6));


// PROCESADOR DE PEDIDOS

function procesadorPedidos({producto, precio, cantidad},...cuponDescuento){

    let total = precio * cantidad;
    const descuentoTotal = cuponDescuento.reduce((acum, cupon)=> {
        return acum + (total * (cupon/100)),0;
});

total -= descuentoTotal;
    return `Producto: ${producto}, total: ${total},`
}

const pedido ={
    producto: "pizza",
    precio: 100,
    cantidad: 2
} 

console.log(procesadorPedidos(pedido, 20))


//


