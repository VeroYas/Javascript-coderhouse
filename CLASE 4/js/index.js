/**
 * SENTENCIA SWITCH
 * 
 * switch(expresion){
    case valor1:
        //codigo de ejecucion;
    break;
    case valor2:
        //codigo de ejecucion;
    break;
    case valor3:
        //codigo de ejecucion;
    break;
    default;
    //codigo de ejecucion en caso de que se cunpla ninguna condicion
    //}
 * 
 */

/*const NUM1 = parseInt(prompt("Ingrese un numero"));
const OPERACION = prompt ("ingrese la operacion que quiera hacer( + - * /)");
const NUM2 = parseFloat(prompt("ingrese otro numero"));
//*if (OPERACION === +){
//    NUM1 + NUM2
//}

let resultado;

switch(OPERACION){
    case "+":
        resultado = NUM1 + NUM2;
        break;
    case "-":
        resultado = NUM1 - NUM2;
        break;
    case "*":
        resultado = NUM1 * NUM2;
        break;
    case "/":
        resultado = NUM1 / NUM2;
        break;
    default:
        alert("no estas ingresando una operacion valida")
}
alert("el resultado de la operacion es: " + resultado); */

/**
 * FUNCIONES
 * Bloque de codigo reutilizable, que va ha ejecutar una funcion especifica.
 * Las funciones se utilizan para agrupar conjuntos de instrucciones que se
 * van a ejecutar cuando se llamen.
 * Las funciones nos sirven para dividir tareas en bloques de codigo
 * mas pequenos.
 * 
 * - reutilizar codigo
 * - modularizar y organizarlo
 * - facilitar el mantenimiento y actualizaciones
 * 
 * ESTRUCTURA
 *  function nobreFuncion(parametros){
 *      //escribir el codigo a ejecutar
 * }
 * nombreFuncion();
 * 
 * Las funciones suelen ser verbos de acciones
 * tambien se escriben en cameLCase
 * 
 */
//EJEMPLO
/*function saludar(){
    console.log("buenas noches chicos")
    console.log("buenas noches chicos")
    console.log("buenas noches chicos")
    console.log("buenas noches chicos")
    console.log("buenas noches chicos")
}
saludar();
saludar();*/

/*function sumar(){
    let num1 = parseInt(prompt("ingrese un numero"))
    let num2 = parseInt(prompt("ingrese otro numero"))

    let suma = num1 + num2;
    console.log("la suma es: " + suma)
}
sumar();
sumar();*/


//INGRESAR NOMBRE
/*let nombreIngresado = prompt("ingresa nombre");
console.log("El nobre ingresado es " + nombreIngresado);
let nombreIngresado2 = prompt("ingresa nombre");
console.log("El nobre ingresado es " + nombreIngresado2);*/
/*
function ingresarNombre(nombre){

    console.log("el nombre ingresado es", nombre);

}
ingresarNombre("pedro");
ingresarNombre("maxi");

let nombreIngresado = prompt("ingresa un nombre")*/


//SALUDAR
/*function saludar(){
    let nombreIngresado = prompt("ingresa un nombre")
    console.log ("hola " + nombreIngresado)
}
saludar();
saludar();*/


// DATOS PERSONA

/*function datosPersona(nombre, apellido, edad){
    console.log("esta persona se llama  " + nombre + ", su apellido es " + apellido + ", su edad es " + edad);

}
datosPersona('Veronica', 'Cuadrado', '33');
datosPersona('Daniel', 'Cuadrado', '3');*/

/*let nombreIngresado = prompt("Ingresa tu nombre")

function datosPersona(nombre, apellido, edad){ //parametros
    console.log("esta persona se llama  " + nombre + ", su apellido es " + apellido + ", su edad es " + edad);
}
//cuando llamamos a una funcion, estos datos se llaman argumentos 
//estos argumentos ingresan a la funcion como parametros
datosPersona(nombreIngresado, 'Cuadrado', '33');
datosPersona('Daniel', 'Cuadrado', '3');*/


//CALCULAR INTERES
function calcular (montoInicial){
    let tasaInteres = 0.5;

    function calcularInteres(){
        return montoInicial * tasaInteres;
    }
    let intereses = calcularInteres();
    let total = montoInicial + intereses
    
    return total
    
}
console.log(calcular(500))