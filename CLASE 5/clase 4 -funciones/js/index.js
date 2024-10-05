/** FUNCIONES ANONIMAS Y FUNCIONES DE FLECHA
 * 
 * FUNCIONES ANÓNIMAS
 * funcion anonima=> no posee un nombre especifico, se define
 * en el momento lo que significa que se define la variable 
 * y se declara la funcion directamente sin asignarle un nombre,
 * se puede asignar a una variable.
 * 
 * Se usa cuando no necesitamos reutilizar la funcion. Se utiliza
 * en callbacks de funciones de orden superior.
 * EJEMPLO:
 */

/*let suma = function(a,b){
    return a+b;
}
console.log(suma(5,3));*/

/**
 * FUNCION DE TIPO FLECHA O FUNCION FLECHA
 * sintnaxis mucho mas concisa, se usa en funciones cortas.
 * no posee argumentos. no posee return lo implicito
 * y cuando la funcion se expresa en una sola linea no es 
 * necesario usar{}
 * 
 * let suma = (a,b) => {
 *      return a + b
 * }
 * 
 * EJEMPLO:
 */

/*let sumaDos = (a,b) => a + b;

console.log(sumaDos(3,4));*/

/**
 * FUNCIONES FLECHA se usan cuando:
 * - necesitamos una sintaxis concisa
 * - necesitamos mantener el contexto this
 * - cuando trabajamos con metodos arrays
 * 
 * FUNCIONES NORMALES se usan cuando:
 * - hablamos de un contexto propio de this
 * - necitamos acceder a argumentos
 * - creamos un objeto
 * - son funiones complejas
 */
