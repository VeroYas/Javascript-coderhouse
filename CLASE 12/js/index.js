/**
 * SUGAR SYNTAX =>es una manera que tenemos en javascript para minimizar la
 * escritura de codigo y de alguna manera hacerla mas legible.
 * 
 * 
 * OPERADOR DE INCREMENTO
 * operador ++ => nos permite incrementar 1
 * 
 * el operador de incremento tienen 2 foras de utilizarlo.
 * 
 * pre-incremento => incrementa la variable perimero y luego devuelve el valor. ++i
 * 
 * post-incremeto => devuelve el valor original y luego incrementa i++.
 */

let a = 5;
console.log(++a);
console.log(a++);
console.log(a)

//Crea un programa que reciba como input un numero positivo n, y luego simule una carrera 
// de 3 corredores. Cada corredor tiene una velocidad inicial diferente, pero cada vez que
// se incrementa el tiempo en 1 segundos la veloxidad de los corredores tambien aumenta 1. 
//Imprime cuantos metros recorrio cada corredor despues de n segundos.

function carrera (n){

    let corredor1 = 0, corredor2 = 0, corredor3 = 0;
    let velocidad1 = 7, velocidad2 = 6, velocidad3 = 4;

    for (let i = 1; i <=n; i++){

        corredor1 += velocidad1++
        corredor2 += velocidad2++
        corredor3 += velocidad3++

    }
    console.log(`despues de ${n} segundos:`);
    console.log(`corredor1: ${corredor1}, metros`)
    console.log(`corredor1: ${corredor2}, metros`)
    console.log(`corredor1: ${corredor3}, metros`)
}

carrera(12);

// operador ternario => es una forma abreviada de estructurar un if-else;

/*
    condicion ? expresionSiesVerdadera : expresionFalsa
    if(){
    }else{
    }
    */

    let esMayorDeEdad = 18;
    let mensaje = esMayorDeEdad >=18 ? 'es mayor' : 'ES menor';
    
    console.log (mensaje)

//programa de notas, si el puntaje es igual o mayor a  90 => excelente, igual o mayo a 70
//pero menor de 90=> bueno, si es menor de 70=> regular

let puntaje = 85;
let notas = puntaje >= 90 ? 'excelente' :
            puntaje >= 70 ? 'bueno' : 'regular';

console.log(notas)


//Crea un programa que reciba una lista de objetos docn informacion de emmpleados
//(nombre, sueldo, anosEnLaEmpresa). Si el empleado lleva mas de 5 anios trabajando,
//se le aplica un bono del 20%, si no, el bono es del 10%. Usa el operador ternario
//para calcular el bono y luego muestra el sueldo total de cada empleado.

const empleados =[
    {
        nombre: 'maria',
        sueldo: 1500,
        aniosEmpresa: 5
    },
    {
        nombre: 'byan',
        sueldo: 1400,
        aniosEmpresa: 4
    },
    {
        nombre: 'eduardo',
        sueldo: 1000,
        aniosEmpresa: 1
    },
]

/*empleados.forEach(empleado => {
    let bono = empleado.aniosEmpresa > 5 ? 0.2 : 0.1;
    let sueldoConBono = empleado.sueldo + (empleado.sueldo * bono);
    console.log(`empleado: ${empleado.nombre}, su sueldo actualizado es ${sueldoConBono}`);
}
)*/

for(const empleado of empleados){
    let bono = empleado.aniosEmpresa > 5 ? 0.2 : 0.1;

    let sueldoConBono = empleado.sueldo + (empleado.sueldo * bono);
    console.log(`empleado: ${empleado.nombre}, su sueldo actualizado es ${sueldoConBono}`);
}


/** FOREACH => nos permite utilizar, break, continue, return, para acceder o saltar iteraciones
 * y una vez que comienza recorre todo.
 * 
 * cuando trabajamos con array y necesitamos recorrerlo sin interrupcion, no necesitamos controlar
 * de manaera detallada.
 * 
 * FOR OF=> puede usar break y continue, para controlar el flujo de la iteracion.
 * 
 * itera sobre cualquier tipo de objeto iterable y no solamente en arrays.
 * Cuando quetemos controlar mejor la iteracion.
 */



/***
 * OPERADOR && EN SUGAR SINTAX
 * 
 * Se utiliza para ejecutar una accion si una condicion es verdadera, sin necesidad de escribir un if completo.
 * se usa cuando tenemos que validar algo rapido.
 */

let usuario ={
    nombre: 'andres',
    activo: true
}
usuario.activo && usuario.nombre === 'andres' && console.log(`bienvenido ${usuario.nombre}`);

/**
 * OPERADOR OR || (corto circuito) alt+124
 * El operador or asigna valores por defecto cuando una variable puede ser nula, indefinida o vacia.
 */

let usuario1 = '';
let nombreUsuario = usuario1 || "el usuario no esta registrado";
console.log(nombreUsuario);

// devolver un valor por defecto si no se ingresa uno

function obtenerDescuento (cupon){
    return cupon || 'sin descuento'
}
console.log (obtenerDescuento("15%"));
console.log (obtenerDescuento(""));

/**
 * OPERADOR NULLISH COALESCING ??
 * Este operador es util cuando queremos retornar los valores siempre y cuando no sean null ni undefined.
 */

//establecer un valor por defecto solo si el valor es null o undefined

let cantidad = undefined; //null
let resultado = cantidad ?? 10;
console.log(resultado);

// crea una funcion que simule un sistema de votacion donde el usuario puede voatar por canditados
//candidato A, candidatob, o dejar el voto en blanco. si el voto es null o undefined,
//se asume que es un voto en blanco. Usa el operador ?? para gesionar la logica

function votar(voto){
    let resultado2 = voto ?? "el voto es blanco"
    console.log(`EL VOTO ES PARA: ${resultado2}`);
}
votar("candidatoA");
votar(null);

/**
 * DESESTRUCTURACION DE OBJETOS
 * cuando queremos acceder a propiedades especificas de un objeto de 
 * una manera mucho mas simple.
 * 
 */

const PERSONA ={
    nombre: "ana",
    edad: 28,
    pais: 'argentina'
};

//console.log(PERSONA.nombre);
//console.log(PERSONA.edad);

const {nombre,edad} = PERSONA;
console.log(nombre);
console.log(edad);

/**
 * en arrayas funciona similar la dessestructuracion, pero se 
 * utilizan [] en lugar de llaves.
 * 
 * facilita la extraccion de elementos, sin necesidad de usar indices
 */

const COLORES =["rojo","verde","azul"];

const [color1, color2] = COLORES;
console.log(color1)
console.log(color2)
