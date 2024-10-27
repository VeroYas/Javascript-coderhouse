/**
 * Storage => es un objeto que nos permite almacenar datos de manera 
 * local en nuestro navegador.
 * 
 * 
 * existen 2 tipos de almacenamiento.
 * 
 * LocalStorage => guarda datos de forma persistente. Si el navegador se
 * cierra y se vuelve abrir, los datos almacenados en el localStorage van a permanecer.
 * 
 * 
 * sessionStorage => va a guardar los datos de forma temporal, solo durante la sesion
 * de navegacion. Cuando se cierra la pestana o la ventana del navegador se elimina todo.
 * 
 * 
 * metodos de localstorage
 * 
 * Setitem => es un metodo qu eproporciona lel localstorage, para almacenar los datos de
 * manera local en el navegador. Setitem toma 2 argumentos, una clave y un valor.
 * 
 * .setItem("llave", "valor")
 * 
 * clave => es una cadena de texto que actua como identificador del valor de almacenamiento.
 * puede almacenar cualquier tipo de dato.
 * 
 * getItem => es el metodo de localStorage, con el cual podemos recuperar
 * los valores asociados a las llaves almacenadas en el navegador.
 * 
 */
//let saludo = prompt("saluda")

//localStorage.setItem("saludo", "hola chicos")
/*localStorage.setItem("numeros", "1234")
localStorage.setItem("booleanos", "true")

let numero1 = 1234
console.log(numero1);

let numeros = localStorage.getItem('numeros');

let datoNumerico = parseInt(numeros);

console.log(numeros)
console.log(datoNumerico)*/

/*let productos =[
    {
        Id:1,
        nombre: 'pepitos',
        precio: 2000
    },
    {
        Id:2,
        nombre: 'oreo',
        precio: 2000
    }
]

localStorage.setItem('productos', productos);
localStorage.clear()*/


/*localStorage.setItem("saludo", "hola chicos")
localStorage.setItem("numeros", "1234")
localStorage.setItem("booleanos", "true")

//obtenemos todas las claves almacenadas en el localStorage

let todasLasClaves = Object.keys(localStorage);

for(let i=0; i<todasLasClaves.length; i++){
    let clave = todasLasClaves[i];
    let valor = localStorage.getItem('clave');

    console.log('clave', clave, 'valor: ', valor)
}*/

/*let productos =[
    {
        Id:1,
        nombre: 'pepitos',
        precio: 2000
    },
    {
        Id:2,
        nombre: 'oreo',
        precio: 2000
    }
]*/

//JSON.stringify => permite transformar los objetos en cadenas de texto de 
//tipo Json y de sta manera poderlo almacenar en el localStorage

/*let productosJson = JSON.stringify(productos);

localStorage.setItem("productos", productosJson);

console.log(productosJson);

let objetoJson = json.parse(localStorage.getItem("productos"));
console.log(objetoJson);*/

let productos =[
    {
        Id:1,
        nombre: 'pepitos',
        precio: 1500
    },
    {
        Id:2,
        nombre: 'oreo',
        precio: 2000
    }
    {
        Id:3,
        nombre: 'mana',
        precio: 1300
    }
]

function mostrarProductos(){
    const productosDiv = document.getElementById("productos")
    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.innerHTML = 
        `
        <h3>${producto.nombre}</h3>
        <p>precio:${producto.precio}</p>
        button onclick = "AgregarAlCarrito(${producto.id}")></Agregar al carrito boton
        `
        productosDiv.appendChild(div);
    })
}
mostrarProductos()

function agregar al CanvasRendering