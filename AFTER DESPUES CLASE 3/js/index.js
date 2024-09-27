//ingresar valores de producto a traves de un prompt 
//que el usuario escriba terminar para finalizar la carga de productos
//que estos valores se sumen y den un resultado en pantalla

/*let imput;
let total = 0; //si voy a dar un valor es preferible que este inicie en 0

while(true){
    imput = prompt("Ingresa el valor del producto o escribe terminar para finalizar")

    if(imput.toLowerCase() === 'terminar'){  //tolowerCase convierte minusculas lo que ingrese el usuario 
        break;
    }

    let valorProducto = parseFloat(imput) //parseFloat convierte el valor string en valor numerico que se con punto flotante 14.24

    if(!isNaN (valorProducto) && valorProducto >= 0){ // isNan refiere a que lo que se esta ingresando no es un numero
        total += valorProducto;
        console.log(total);
    } else{
        alert("por favor ingrese un numero")
    }
}

console.log("el valor total sumado de los productos es " + total.toFixed(2)); */



//cotizador de seguros de autos
//marca, modelo, ano, accesorios(parametros)

//marca => ford, chevrolet?

/**
 * ford = 100
 * chevrolet = 200
 * audi
 * bmw
 */

/*
prompt = ingresa la marca (elegir entre bmw, ford, chevrolet)
prompt === "ford"{
    vale = 100
}
sino (prompt === "chevrolet")
    vale = 200

Condicion: dependiendo el ano se reste el 5% del valor standar que le demos 2024
2024 == 1000
*/


/**
 * Realizar un programa que permita ingresar valores del mismo tipo para las
 * variables num1 y num2. Una vez cargadas, mostrar ambas variables por pantalla
 * intercambie sus valores (que lo cargado en num1 en num2, y viceversa)
 * Volver a mostrarlas actualizadas.
 */

/*let variable1 = prompt("Ingrese un valor");
let variable2 = prompt("Ingrese otro valor");

console.log(variable1);
console.log(variable2);

let temporal = variable1;

variable1 = variable2;

variable2 = temporal;
console.log("variable 1 ahora aloja a " + variable1);
console.log("variable 2 ahora aloja a " + variable2);*/


/**
 * Realiza un programa que permita ingresar el valor monetario de una hora de trabajo y 
 * la cantidad de horas trabajadas por dia por un trabajador.
 * Debes mostrar el valor del salario semanal, sabiendo que trabaja todos los dias habiles
 * y la mitad de horas del dia habil los sabados.
 */

//let precioPorHora
//let horasTrabajadasPorDiaHabil
//let horasTrabajadasSabado
//let diasTrabajados
//let salarioSemanal

//precioPorHora = parseInt(prompt("Ingresa el valor de la hora trabajada: "));
//horasTrabajadasPorDiaHabil = parseInt(prompt("Ingresa la cantidad de horas trabajadas por dia habil: "));
//horasTrabajadasSabado = parseInt(prompt("Ingresa la cantidad de horas trabajadas los sabados: "));
//diasTrabajados = parseInt(prompt("Ingresa los dias trabajados esta semana: "));\
//salarioSemanal = (diasTrabajados * (horasTrabajadasPorDiaHabil + horasTrabajadasSabado)) + precioPorHora;
//console.log("El salario total es de $" + salarioSemanal)

let precioHora = parseInt(prompt("Ingrese cuanto cobras por hora"));
let horasTrabajadas = parseInt(prompt("Ingrese cuantas horas trabajas"));
//trabajamos 5 dias semanales
let diaTrabajado = precioHora * horasTrabajadas;
let semanaTrabajada = diaTrabajado * 5;
let sabadoTrabajado = diaTrabajado / 2;
let totalSemana = semanaTrabajada + sabadoTrabajado;
console.log("el valor total de su salario es " + totalSemana);


