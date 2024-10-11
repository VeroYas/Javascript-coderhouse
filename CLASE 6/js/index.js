/**
 * ARRAY
 * es una lista, o una estructura de datos que se utiliza para almacenar una coleccion de valores.
 * los valores array pueden ser de cualquier tipo, numeros, cadena de texto, objetos y podemos
 * tener un array dentro de otro array, funciones.
 * inicia con el indice que es la posicion 0
 * 
 * por consola se observa la palabra length que nos indica la longitud del array.
 * let array = [coleccion de datos]; un array vacio
 * 
 * corchetes es con alt 91
 * 
 * () parentesis => funciones
 * {} llaves => objetos
 * [] corchetes => arrays
 * 
 * length no es un metodo, es una propiedad y sirve para darnos la cantidad
 * de elementos que posee el array
 */

/*let strings = ["numero", "perro","jaime","tyrion"];
let numeros = [1,2,3,4,5];
let boolean = [true, false, true, false];
let mixto = [1, "numero", false, 2];

let pokemon = [

    {
        pokemon: "pikachu",
        tipo: "electrico"
    },
    {
        pokemon: "ivi",
        tipo: "normal"
    },
    {
        pokemon: "ligia",
        tipo: "legendario"
    }
]

console.log(strings)
console.log(numeros)
console.log(boolean)
console.log(mixto)
console.log(pokemon)
console.log(strings[2])


for(let i = 0; i < pokemon.length; i++){
    //console.log(pokemon[i])   imprime todo
    console.log(pokemon[i].pokemon)
}*/

/**METODO PUSH
 * permite agregar uno o mas elementos al final del array
 */

/*let strings = ["numero", "perro", "jaime", "tyrion"];

strings.push("juan pablo","pepe");
console.log(strings)

/**METODO POP
 * va a eliminar un elemento o varios del array siempre y cuando este al final
 */

/*strings.pop();
console.log(strings);

/**METODO UNSHIFT
 * agrega elementos al inicio del array
 */
/**METODO SHIFT
 * elimina elementos al inicio del array
 */

/*strings.unshift("Bryan");
console.log(strings)
strings.shift()
console.log(strings)*/

/**SPLICE
 * se utiliza para modificar el array eliminando, agrendo o reemplazando
 * elementos en posiciones especificas
 */

/*let miNuevoArrary = strings.splice(1,2);
console.log(strings);
console.log(miNuevoArrary);*/


/**METODO JOIN
 * convierte elementos de un array en una cadena de texto y los une
 * a traves de un separador
 */
let strings = ["numero", "perro", "jaime"];
let pasoAString = strings.join(" ");

console.log(pasoAString)

/**METODO INDEXOF
 * sirve para buscar el primer elemento de un array que se repita
 */

let frutas = ["manzana", "pera", "banana", "manzana"];
let indice = frutas.indexOf("banana");
console.log("el indice de manzana es: " + indice);

/**METODO  INCLUDES
 * me dice si un elemento extiste o no en el arrar devolviendo un booleano
*/

let existe = frutas.includes("FRUTILLA");
console.log(existe);

/**METODO REVERSE
 * ayuda a invertir el orden de los elementos del array
 */

let frutaInvertida = frutas.reverse();
console.log(frutaInvertida)

/**METODO CONCAT
 * se utiliza para combinar 2 o mas arrays en uno
 */ 

let array1 = [1,2,3,4]
let array2 = [5,6,7,8]
let array3 = [9,10,11,12]

let arrayCombinado = array1.concat(array2,array3)

console.log(arrayCombinado)

/**METODO SLICE
 * se utiliza para extraer una porcion de un array y devolverlo 
 * en un nuevo array sin modificar el array original
 */

let alumnos = ["franco","estefani","natalia","jonathan"]
/*let aprobadas = alumnos.slice(1,3)
console.log(aprobadas)
console.log(alumnos)*/
let listaNueva = [].concat(alumnos.slice(0,1),alumnos.slice(-1));
console.log(listaNueva)


/**FOR...OF
 * Es una estuctura de control de flujo para recorrer y operar
 * en elemento de un iterable
 */

const lenguajes = ["ingles", "iataliano","espanol","frances"];

for (const lenguaje of lenguajes){
    console.log(lenguaje);
}

//CARRITO DE PRODUCTOS QUE SUMEN EL TOTAL DE LOS PRECIOS DE LOS PRODUCTOS

const carrito = [
    {
        producto: "camiseta",
        precio: 20
    },
    {
        producto: "zapatillas",
        precio: 30
    },
    {
        producto: "pantalones",
        precio: 40
    },
]

let precioTotal = 0;

for(const producto of carrito){
    precioTotal += producto.precio;
}

console.log("el precio del carrito total es: "+ precioTotal)