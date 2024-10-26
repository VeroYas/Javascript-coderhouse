
//en la segunda sintaxis se llaman a la etiqueta o atributo en javascript
// y se utiliza la palabra reservada on y el tipo de evento. una vez que 
// se llama, se debe ejecutar una funcion donde le vamos a decir que haga
//el evento.

//on es un metodo que nos sirve para asignar eventos + el tipo de evento
const miBoton = document.getElementById('miBoton');

miBoton.onclick = function(){

    alert("se ejecuto el evento de la segunda manera")

}

//la otra manera de ejecutar eventos es a traves de una sintaxis llamada
//addEvnetListener es una forma mas flexible y la mas recomendada para
//gestionar eventos

//addEventListener es un metodo de js que se utiliza para asignar eventos,
//nos permite ejecutar funciones cuando ocurre un evento especifico

const botonDos = document.getElementById('miBoton2');

botonDos.addEventListener('click', function(){
    alert("ejecucion del evento con la tercera sintaxis")
})

//

/**
 *  classList => propiedad que nos permite manipular las clases en css y crearlas
 * toggle=> permite anadir o quitar en este caso la clase*/
/** contains=> es un metodo, que se utiliza en las propiedades de classList
 * devuleve un valor de verdadero o falso.
 */
const botonNoche = document.getElementById('modoNoche');

botonNoche.addEventListener('click', function(){
    document.body.classList.toggle('modo-noche');

    if (document.body.classList.contains('modo-noche')){
        botonNoche.textContent = "Modo dia";
    }else{
        botonNoche.textContent = "Modo Noche"
    }
})


const pasarRaton = document.getElementById('pasarRaton');

pasarRaton.addEventListener('mouseover', function(){

    pasarRaton.style.backgroundColor = 'lightgreen'
})

pasarRaton.addEventListener('mouseout', function(){
    pasarRaton.style.backgroundColor = 'lightblue'
})


/**
 * mousedown=> se dispara cuando un boton del raton es presionado
 * mouseup=> cuando el click del raton es soltado
 */

pasarRaton.addEventListener('mousedown', function(){
    pasarRaton.textContent = 'apretaste el div';
    pasarRaton.style.backgroundColor = 'blue';
})

pasarRaton.addEventListener('mouseup', function(){
    pasarRaton.textContent = 'soltaste el div';
    pasarRaton.style.backgroundColor = 'red';
})

//keydown => se dispara cuando se presiona una tecla
//keyup => se dispara cuando se suelta

//keypress => ya no se usa pero se disparaba cuando una tecla es presionada

const estado = document.getElementById('estado');
//key es una propiedad del evento de teclado, que nos sirve para obtener 
//el valor de la tecla que fue presionada.
document.addEventListener('keydown', function(event){
    estado.textContent = `tecla presionada: ${event.key}`
    estado.style.color = 'blue';
})

document.addEventListener('keyup', function(event){
    estado.textContent = `tecla soltada: ${event.key}`
    estado.style.color = 'green';
})

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(evento){
    const nombreInput = document.getElementById('nombre').value
    if(nombreInput === ''){
        alert ('por favor, ingresa un nombre')
        evento.preventDefault() // es un metodo que evita que el formulario se envie
    }
})

const colorSeleccionado = document.getElementById('color');

colorSeleccionado.addEventListener('change', function(evento){
    alert(`seleccionaste ${evento.target.value}`)
    //console.log(`seleccionaste ${evento.target.value}`)
})

