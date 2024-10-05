/**
 * OBJETOS
 * - es algo que tiene varias caracteristicas => una coleccion de propiedades,
 *   donde cada propiedad se compone de una clave y un valor.
 * - En javascrit se utiliza para almacenar datos y funciones.
 * 
 *      let nombre ={
 *          coleccion de propiedades
 *      }
 * 
 * let nombre = {
 *      clave: valor,
 *      clave1: valor1,
 * }
 * 
 * EJEMPLO
 */

/*let persona ={
    nombre: "Pedro",
    edad: "31",
    estudios: "Programacion"
}

console.log(persona);
console.log(persona.estudios);*/


/*let producto = {
    id: 1,
    nombre: "jarron Manuela",
    material: "marmol",
    color: "blanco y camel",
    precio: 1500,
}

console.log(producto.color);
console.log(producto.precio);*/


/**
 * OBJETOS CONSTRUCTORES
 * permite crear objetos a través de plantillas, que se definen
 * a partir de una funcion
 * Sirve para instanciar y crear multiples objetos.
 * 
 * 1. Se define la funcion, que inicia  las propiedades del objeto
 * 2. se pasa la información a través de una palabra clave llamada new.
 * 
 * para reconocer un objeto constructor escribimos su primera 
 * letra en mayúscula
 * 
 * this es una palabra que refiere al contexto de ejecucion.
 * el valor puede cambiar dependiendo de como invoquemos a la funcion.
 * 
 * Instanciar: refiere al proceso de crear un objeto a partir de una clave.
*/

/*function Auto(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

let auto1 = new Auto('toyota','corola',2021)
let auto2 = new Auto('honda','civic',2020)

console.log(auto1);
console.log(auto2);*/

//EJEMPLO

/*function Auto(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.info = function(){
        return 'la marca del choche es $(this.marca), su modelo es $(this.modelo), ano $(this.ano)'
    }
}

let auto1 = new Auto('toyota','corola',2021)
let auto2 = new Auto('honda','civic',2020)

console.log(auto1);
console.log(auto2);*/


/**
 * CLASES: las clases son una manera mas moderna de hacer objetos
 * es  una manera mas facil en cuanto a sintaxis y mas clara.
 * 
 * las clases funcionan de la siguiente manera:
 * dentro de la clase se crea un constructor que nos sirve para 
 * inicializar las propiedades del objeto
 * 
 * EJEMPLO
 */

/*class Auto {
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    info(){
        return "${this.marca}, ${this.modelo}, ${this.anio}"
    }
}

let auto1 = new Auto('honda', 'civic', 2021);

console.log(auto1)*/


class Persona {
    constructor(nombre, edad, calle, ciudad, codigoPostal, habilidades){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = {
            calle: calle,
            ciudad: ciudad,
            codigoPostal: codigoPostal
        }
        this.habilidades = habilidades;
    }

    mostrarInfo(){
        console.log("nombre $this.nombre")
    }
}

let Juan = new Persona(
    "Juan",
    30,
    "guido",
    "Mar del Plata",
    7006,
    "tocar el piano"
)

console.log(Juan.direccion)