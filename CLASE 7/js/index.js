/**
 * ABSTRACCION
 * es la manera en la cual podemos reducir la complejidad y permitir una implementacion
 * y diseno eficiente de datos
 * 
 * - vamos a evitar el duplicado de codigo
 * - poder crear multiples instancias con una sola abstraccion
 * - encapsular datos
 * - evitamos codigo de bajo nivel
 */

/*function sumar (a,b){
    return a + b
}

console.log(sumar(3,5))*/


/**
 * FUNCIONES DE ORDEN SUPERIOR
 * es una funcion que toma una o mas funciones como argumentos o devuelve 
 * una funcion como resultado
 */

/*function mayorQue(x){
    return (num) => num > x; 
}

const MAYORQUEDIEZ = mayorQue(10);
const MAYORQUEVEINTE = mayorQue(20);

console.log(MAYORQUEDIEZ(11))*/

/*function asignarOperacion (operacion){
    if (operacion === 'sumar'){
        return (numero1, numero2) => numero1 + numero2

    }else if(operacion === 'restar'){
        return (numero1, numero2) => numero1 - numero2
    }
}

    let sumar = asignarOperacion ('sumar');
    let resta = asignarOperacion ('resta');

    console.log(sumar(4,6));*/

/*FUNCIONN QUE TOME DOS NUMEROS, OPERACION
las funciones pueden recibir otras funciones como parametros*/

/*function operar(num1, num2, operacion){
    return operacion (num1,num2)
}

function suma (a,b){
    return a + b;
}

function resta (a,b){
    return a - b;
}

function multiplicar (a,b){
    return a * b;
}

function dividir (a,b){
    return a / b;
}

console.log(operar(5,3,suma))
console.log(operar(5,3,resta))
console.log(operar(5,3,multiplicar))
console.log(operar(5,3,dividir))*/


/**FOREACH
 * Es una funcion que se utiliza para iterar sobre los elementos de un array
 * y permite ejecutar una funcion especifica para cada elemento del array.
 * 
 * parametros
 * 1. elemento = elemento actual de array que se procesa
 * 2. indic (opcional) el indice actual del elemento
 * 3. arreglo (opcional)
 * 
 * el indice se refiera a la posicion
 */

/*const frutas = ["manzanas","peras","kiwi","naranja"];

frutas.forEach(function(frutas,indice){

    console.log('${indice} : ${frutas}')

})

const numeros = [2,4,6,8];
let suma = 0;

numeros.forEach(numero => {
    suma += numero
})

console.log(suma)

const PERSONAS = [
    {
        nombre:'pedro',
        edad: 25
    },
    {
        nombre:'maria',
        edad: 28
    },
    {
        nombre:'juan',
        edad: 30
    },
    {
        nombre:'carlos',
        edad: 18
    }
]
const NOMBRES = []
PERSONAS.forEach(persona =>{
    NOMBRES.push(persona.nombre)
})
console.log(NOMBRES)*/


/**METODO FIND
 * devuelve el primer elemento de un arreglo que cumpla con una condicion dada,
 * si no cumple ningun elemento con la condicion devuelve undefined
 */

/*const numeros = [2,5,6,7,8]
const primerPar = numeros.find(num => num % 2 === 0);
console.log(primerPar)*/

/**
 * FILTER
 * nos devuelve un nuevo arreglo, con todos los elementos que pasen 
 * las condiciones dadas por el programador.
 */

let edad = [15,20,22,16,40,];
let MayoresDeEdad = edad.filter(edad => edad >= 18);
console.log(MayoresDeEdad);

/**
 * SOME
 * verifica si un elemento en el arreglo cumple o no con una condicion dada.
 * devuelve true si al menos un elemento pasa la prueba y false si no lo pasan.
 * 
 */

/*const numeros = [ 1,3,5,8];
const par = numeros.some(num => num %2 === 0);
console.log(par)*/

/**
 * MAPS
 * Crea un nuevo array con los resultados de aplicar una funcion sobre los
 * elementos del array original.
 */

const PRECIOS = [100,150,200,300];
let precioAumentos = PRECIOS.map(precio => precio *1.5);
console.log(precioAumentos);

/**
 * REDUCE
 * reduce el array a una unica expresion
 */

const suma = PRECIOS.reduce((acum, num) => acum + num,0);
console.log(suma)

/**
 * SORT
 * me permite ordenar un array. Dentro de este debemos trabajar con una
 * funcion de comparacion
 */

const numeros = [5,4,10,25,30];
numeros.sort((a,b) => a-b); //se ordena el codigo de manera creciente
numeros.sort((a,b) => b-a); //se ordena el codigo de manera  decreciente
console.log(numeros)

const string = ["manzana","Banana", "banana","kiwi"];
string.sort((a,b) => a.localeCompare(b)); //orden creciene
console.log(string)
string.sort((a,b) => b.localeCompare(a)); // orden decreciente
console.log(string)