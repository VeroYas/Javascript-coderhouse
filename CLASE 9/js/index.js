/**
 * DOM Document object model => modelo de objeo en el documento
 * es la manera con la cual nosotros vamos a poder interactuar con nuestro HTML
 * 
 * Las etiquetas visto desde javascript se van a considerar NODOS, para acceder
 * a estos vamos a utilizar los atributos class, id o la misma etiqueta.
 * 
 * 
 * 
 * DOCUMENT=> E s el objeto que nos proporciona la interfaz para interactuar
 *  con los elementos y las estructuras HTML.
 * a traves de document, nosotros vamos a poder acceder, modificar y manipular HTML.
 * 
 * Se puede acceder de 5 maneras a HTML document 
 * 
 * MANERAS MODERNAS DE ACCEDER AL HTML
 * 1 => id, getElementById("elNombreDeId")
 * 
 */

/*let titulo = document.getElementById("titulo");
console.log(titulo)

//2 => let NombreVarable = document.getElementByClassName("NombreDeLaClase");

let subtitulo = document.getElementsByClassName("ingresarPorClass");
console.log(subtitulo)
/*
HTMLCollection => es una coleccion de elemntos de DOM.
que se va a actualizar en caso de que se modifique el documento.
sirve pra representar a las clases de un codigo html.
ESta interfaz, va a representar ua lista de objetos de elementos HTML.
vamos a poder acceder a las posiciones en esa coleccion.
*/

//3 => tags, getElementTagName
/*let misLi = document.getElementsByTagName("li")
console.log(misLi)

//MANERAS CLASICAS DE ACCEDER AL HTML
//4 => querySelector, nos permite llamar nodos con la misma sintaxis
//que CSS. En el caso de querySelector "solo" nos va a traer el primer
//objeto que encuentre.
let queryNombres = document.querySelector(".nombres");
console.log(queryNombres);

//5 => querySelectorAll nos va a traer a todos los nodos que cumplan
//con la condicion

let queryAll = document.querySelectorAll(".nombres");
console.log(queryAll)

/**
 * HTML COLLECTION => Coleccion en vivo de elementos HTML. En vivo significa
 * que si el DOM cambia, la coleccion se actualiza automaticamente.
 * solo incluye los nodos que son elementos como por ejemplo: div, p, span.
 * se usa cuando se necestia trabajar solamente con elementos HTML.
 * 
 * 
 * NODELIST => es una coleccion que puede contener cualquier tipo de nodo 
 * en DOM, no solamente elementos HTML. Se usa cuando necesitamos que incuyan
 * diferentes tipos de nodos y sus atributos.
 */

//let titulo = document.getElementById("hdinamico");

// para manipular nodos, tenemos diferentes maneras.

//innerText => Es una propiedad que nos permite acceder al texto visible dentro
//del elemento, omitiendo cualquier contenido anterior.

//titulo.innerText = "Mi primera pagina con Javascript"

//document.getElementById("hdinamico").innerText = "cambiamos titulo mas resumido"


//innerHTML => Nos permite crear contenido html interno dentro de un elemento.

let containerCards = document.getElementById("container-cards");

containerCards.innerHTML = 
                            `
                            <div class="card"> 
                                <h2>Producto 1</h2>
                                <p>Informacion del producto</p>
                                <button>Comprar</button>
                            </div>
                            `;

//createElement => nos permite crear a nosotros crear un nuevo elemento 
//HTML en el DOM

let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");
parrafo.innerText = "esto es un parrafo creado desde JS";
parrafo.className = "rojo";
parrafo.id = "nuevoId";

//appendChild => esto es un metodo que se utiliza par agregar el 
//nodo creado desde javascript a HTML.

contenedor.appendChild(parrafo);

// si nosotros quisieramos agregar o quitra clases

//a traves del objeto classList, nos proporciona metodos para agregar
//o eliminar clases

parrafo.classList.add("nuevaClase");
parrafo.classList.remove("nuevaClase");

parrafo.classList.remuve("rojo");