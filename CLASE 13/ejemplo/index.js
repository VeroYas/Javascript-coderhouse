const contenedor = document.createElement('div');
document.body.appendChild(contenedor);

contenedor.innerHTML = `

<form id="formulario-presupuesto">
        <label for="tipo">tipo:</label>
        <select name="" id="tipo">
            <option value="ingreso">ingreso</option>
            <option value="gasto">gasto</option>
        </select>

        <label for="monto">monto</label>
        <input type="number" id="monto" required>

        <label for="categoria">categoria:</label>
        <input type = "text" id="categoria" required>
        <button type="submit">agregar</button>
    </form>

    <div id="resultado"></div>
    <button id="verHistorial">ver historial</button>
`

//DOMcontentLoaded es un evento que se dispara al inicio del HTML, se 
//dispara sin espera la carga de css o las imagenes.
//nos permite ejecutar javascript tan pronto como se cargue HTML.

document.getElementById('DOMcontentLoaded',()=>{
    const contenedorImagen = document.getElementById('container-imagen')
    const btnagregarImagen = document.getElementById('agregar-imagen')

    function agregarImagen(){
        const imagen = document.createElement('img');

        imagen.src = './arete2.jpg';
        imagen.alt = 'arete-rombo'
        imagen.style.width = '300px'

        contenedorImagen.appendChild(imagen)
    }

    btnagregarImagen.addEventListener('click', agregarImagen)

});