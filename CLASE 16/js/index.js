/**
 * API => interfaz de programacion de aplicaciones
 * 
 * 
 * XMLHTTPRequest (XHR)
 * Nos permite realizar solicitudes http de manera asincronica
 * desde el navegador web. 
 * nos permite traer o enviar informacion, mientras el usuario 
 * este en el sitio web
 */

/*

const url = 'https://jsonplaceholder.typicode.com/users';

//creamos un objeto de tipo XMLHttpRequest
const xhr = new XMLHttpRequest();

// Se crea una funcion manejadora, que luego vamos a usar como callback

//callback son funciones que se pasan como argumentos a otras
//funciones y se ejecutan dentro de esa funcion.

/**
 * siempre que hacemos peticiones ajax, devuleve el codigo de respuesta,
 * este codigo de respuesta nos va a decir la solicitud de HTTP asincrona.
 */

/**function manejador(){
    if(this.readyState === 4 && this.status === 200){

        /**thisReadyState => es una propiedad que nos indican los estados 
         * de solicitud al servidor
         * 
         * 0=> (unset) la solicitud no se ha iniciado.
         * 1=> OPENED => la conexion con el servidor fue establecida.
         * 2=> headers_recived => se recibieron las headers como respuestas.
         * 3=> loading => se recibe la respuesta, y se descargan los datos.
         * 4=> (done) => la operacion esta completada.
         * 
         * status=> es una propiedad que nos indica el estado HTTP de la respuesta
         * recibida por el servidor.
         * 
         * 200 => la solicitud se completo correctamente
         * 404 => Not found => la pagina no se encuentra.
         * 500 => error interno en el servidor
         * 
         */

        /*const datos = JSON.parse(this.response)
        console.log(datos);
    }
}

//se crea un evento que llama al evento load y le pasamos como parametro la
//funcion manejadora.

//se crea un evento que llama al evento load, y le pasamos como parametro 
//la funcion manejadora
xhr.addEventListener("load",manejador)
//con el metodo open se inicia una nueva solicitud HTTP antes de enviarla
xhr.open("get", url)
// La utilizamos para enviar solicitudes HTTP al servidor despues de configurar
// todos los detalles de la solicitud.
xhr.send();

const app = document.getElementById("app");
function mostrarUsuarios(datos){
    datos.forEach(usuarios => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${usuarios.username}</h2>
        `
        app.appendChild(div)
    })
};


/*
FETCH => es una manera moderna que atraves de una funcion permite hacer peticiones
a servidores para obtener datos o enviarlos.

1=> vamos a llamar a la API y guardarla en una variable

fetch(variable)
    .then => muestara si hay respuesta con JSON
    .then => es el que nos permite manipular los datos obtenidos de JSON
    .cath => va a mostrarse si hay algun error

*/
/*
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)

// se usa para manejar la respuesta de la solicitud a traves de fetch (esta 
//respuesta se convierte en una formato json)
    .then(respuesta => respuesta.json())
    //nos permite manipular la informacion
    .then((datos)=>{
        console.log(datos)
    })
    .catch(error => console.log(error))
*/

    
/*
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
fetch(url)
    //se usa para manejar la respuesta de la solicitud a traves de fetch(esta respuesta se convierte
    // en formato json)
    .then(respuesta => respuesta.json())
    //nos permite manipular la informacion.
    .then((pokemon)=>{
            console.log('nombre',pokemon.name);
            console.log('imagen',pokemon.sprites.front_default);
            const container = document.getElementById('pokemonContainer')
            const name = document.createElement('h3');
            name.textContent = pokemon.name;
            const img = document.createElement('img')
            img.src = pokemon.sprites.front_default;
            container.appendChild(img)
            container.appendChild(name)
        })
    .catch(error=> console.log(error))
*/

/**
 * ASINC Y AWAIT => nos permmite manejar operacines de manera mas legible y sencilla
 */

async function obtenerDatos() {
    //todo lo que ejecutamos aca dentro se va a manejar de manera asincrona.
    //await funciona como una pausa o una escucha de la promesa

    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/pikachu');
    const pokemonUno = await response.json()
    console.log(pokemonUno.name)
    
}

obtenerDatos();