/* Si - condicion 
if => sentencia que nos dice si una condicion se cumple,
si la condicion se cumple se ejecutan todas las instrucciones
y si es false no se ejecuta ninguna

if(condicion){
    //la instruccion o lo que queremos que se devuelva
}
*/

//asignamos
let a , b, c, d ;

//inicializamos
a = 18;

/*  
OPERADORES DE COMPARACION O RELACIONALES

= asignacion
== operador de igualdad (solo vamos a comparar valores y no el tipo de dato)
=== operador de igualdad pero estricto (va a comparar valores y tipo de dato)
!= distinto
!== distinto estricto

MAYOR QUE O MENOR QUE
MAYOR > (el numero es mayor al que se esta comparando) (no incluye)
    >= (el numero es mayor e igual al que se esta comparando)(si lo incluye)
MENOR < (el numero es menor al que se esta comparando) (no se incluye)
    >= (el numero es menor al que se esta comparando) (se incluye)
*/




a = 23;
if(a == "18" ){
    console.log("es un 18")
}

if(a === "18"){
    console.log("me devuelves 18?")
}else{
    console.log("no va a funcionar campeon porque no es igual el tipo de dato numerico")
}

//CUANTOS ANOS TENGO

// cuando lleva el numero un punto flotante se usa parse float

//EJEMPLO 1:
/*let edad = parseInt (prompt("por favor ingresa tu edad para ingresar al voley"));
if(edad === 18){
    console.log("Puede entrar")
}else{
    console.log("usted no tiene 18")
}*/

/*EJEMPLO 2:
let edad = parseInt (prompt("por favor ingresa tu edad para ingresar al voley"));
if(edad >= 18){
    console.log("Puede entrar")
}else{
    console.log("usted no tiene 18")
}*/


//else if => dcuando nosotros queremos comparar o hacer multiples condiciones
//NOTAS DE EVALUACION
// 90 => el examen es optimo
// 75 => el examen es correcto
// 60 => el examen es bajo
// -60 => el examen esta desaprobado

/*let  nota = parseInt(prompt("ingrese la nota del alumno:"))
if(nota >= 90){
    console.log("es un crack tiene optimo con " + nota)
}
else if(nota >=75){
    console.log("esta bien, tiene un correcto")
}
else if(nota>=60){
    console.log("esta flojo tiene una nota baja")
}
else{
    console.log("ni chatgpt lo ayudo");
}*/

/**OPERADOR LOGICO AND &&
 * Este operador va a devolver verdadero siempre y cuando las condiciones
 * sean verdaderas
 *  a       b       a && b
 * true     true    true (se va a ejecutar)
 * true     false   false (no se va a ejecutar)
 * false    true    false (no se va a ejecutar)
 * false    false   false (no se va a ejecutar)
 * */

//Ejemplo:
/*let edad = 25;
let tieneLicencia = true;
if(edad >= 18 && tieneLicencia === true){
    console.log("el chico puede manejar")
}
else {
    console.log("el chico no puede manejar")
}*/

/** OPERADOR OR || alt+124
 * el bloque de codigo se ejecuta si al menos una condicion es verdadera.
 * a        b       a || b
 * true     true    true
 * true     false   true
 * false    true    true
 * false    false   false
 */

//Ejemplo
/*let nombre = "Juan";
let apellido = "Perez";

if (nombre === "Juan" || apellido === "Perez"){
    console.log("La persona cumple con los criterios")
}else{
    console.log("La persona no cumple con los criterios")
}*/

/*let nombre = "Pedro";
let apellido = "Sanchez";
let edad = 25;

if (nombre === "Juan" || apellido === "Perez" || edad >= 18){
    console.log("La persona cumple con los criterios")
}else{
    console.log("La persona no cumple con los criterios")
}*/

/**OPERADOR NOT !
 *  se utiliza para invertir el valor de una condicion boleana, 
 * esto se llama conversion booleana.
 * 
 * true => !true => false
 * false => !false => verdadero 
 */

//Ejemplo
let campoNombre = "";
if(!campoNombre){
    console.log("El campo nombre esta  vacio por favor completa el campo")
}
else{
    console.log("el campo completado")
}