//SETTIMEOUT => la accion se dispara en el tiempo que se establezaca

/*setTimeout(() =>{
    console.log("Hola")
}, 9000)*/

//SETINTERVAL => Hace que la funcion se ejecute cada cierto tiempo que se determine

/*setInterval (() => {
    console.log("Hola")
})*/

//CUENTA REGRESIVA
/*let cuentaRegresiva;
let idTimeout;
let tiempoRestante = 10;
function iniciarCuentaRegresiva() { 
    console.log("Iniciando cuenta regresiva");
    cuentaRegresiva = setInterval(() => {
        tiempoRestante-- ;
        console.log("Tiempo restante: " + tiempoRestante);
        if(tiempoRestante <= 0) {
            console.log("Se acabo el tiempo");
            clearInterval(cuentaRegresiva);
    }}, 1000)
    
    idTimeout = setTimeout(() => {
console.log("Se agoto el tiempo");
clearInterval(cuentaRegresiva);
clearTimeout(cuentaRegresiva);
    }, tiempoRestante * 1000)
};

function detenerCuentaRegresiva(){
    tiempoRestante = 10;
    clearInterval (cuentaRegresiva);
    clearTimeout(cuentaRegresiva);
    console.log("Cronometro detenido");
}

function reiniciarCuentaRegresiva(){
    detenerCuentaRegresiva();
    tiempoRestante =10;
    iniciarCuentaRegresiva();
}

setTimeout(()=>{
    iniciarCuentaRegresiva();
},3000)
*/

//PROMESA

const usuarios = {
    1:{
        id: 1,
        nombre: "Juan Perez",
        edad: 30,
        correo: "juanperez@gmail.com",
    },
    2:{
        id: 2,
        nombre: "Ana Garcia",
        edad: 25,
        correo: "anagarcia@gmail.com",
    },
};

function obtenerUsuario (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios[id];
            if (usuario) {
                resolve(usuario);
                console.log(usuario)
        } else {
            reject("no se encontro usuario")
        }
        }, 3000)
    })
}

const userId = prompt("ingrese el id del usuario");
obtenerUsuario(Number(userId))
.then (usuario =>{
    console.log("el usuario es: ", usuario)
    alert("el usuario es: ", `${usuario.id}`)
})

.catch(error => {
    console.log(error)
    alert(error)
}
)