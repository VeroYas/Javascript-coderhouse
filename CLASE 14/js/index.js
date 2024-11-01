/*const botonSweet = document.getElementById('boton-sweet');
botonSweet.addEventListener('click', () =>{
    Swal.fire({
        title: 'hola comision',
        text:'esto es un mensaje',
        icon: "warning", 
        background: "bisque",
        backdrop: "blue",
        imageUrl:"./assets/arete2.jpg",
        confirmButtonText: "aceptar",
        showCancelButton: true,
        cancelButtonText:"no funciona"
    })
})*/

const botonInicio = document.getElementById('botonInicio');

const usuarioAutorizado = "admin";
const passwordAutorizado = "1234";

botonInicio.addEventListener('click', () => {

    Swal.fire ({
        title: "inicio sesion",
        html: `
            <input type="text" id="usuario" class="swal2-input" placeholder="usuario"> 
            <input type="text" id="password" class="swal2-input" placeholder="contrasena">
        `,
        confirmButtonText: "enviar",
        cancelButtonText: "cancelar"
    }).then((result) => {
        if (result.isConfirmed){
            const usuario = document.getElementById('usuario').value;
            const password = document.getElementById('password').value;

            if (usuario === usuarioAutorizado && password === passwordAutorizado){
                window.location.href = "ingreso.html"
            }
        }
    })
})


const botonTostify = document.getElementById('botonTostify');

botonTostify.addEventListener("click",() =>{

    Toastify({
        text: "producto agregado al carrito",
        duration: 1000,
        position: "right",
        gravity: "top",
        style:{
            background: "red"
        }
    }).showToast()
});
