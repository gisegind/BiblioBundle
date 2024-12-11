//Acciones para el Menú Hamburguesa en Mobile

function mobileHamburguesa() {
    //obtengo por ID el ícono y la lista del nav
    const hamburguesaIcono = document.getElementById("icono-hamburguesa");
    const listaH = document.getElementById("lista-hamburguesa");
    //escucho el evento click se ejecuta la función que alterna la clase la agrega o la quita
    hamburguesaIcono.addEventListener('click', function () {
        listaH.classList.toggle('mostrar');
    });
};

//una vez que carga todo el documento llamo a la función mobileHamburguesa
document.addEventListener('DOMContentLoaded', mobileHamburguesa)

//VALIDAR FORMULARIO
//se crea una función para mostrar los mensajes de texto en una ventana emergente


function mostrarMensaje(texto) {
    const mensajeEmergente = document.getElementById("mensaje-emergente");
    const mensajeTexto = document.getElementById("mensaje-texto");

    mensajeTexto.textContent = texto; //le asigno un texto al mensaje

    mensajeEmergente.classList.add("visible"); //que sea visible
    mensajeTexto.addEventListener("click",
        function () { mensajeEmergente.classList.remove("visible"); }); //con un click la oculto
}

function validarFormulario() {
    //obtengo las variables a través de suID, 
    //con trim elimino espacios que se pudieron cargar por error
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    //obtengo el valor del checkbox seleccionado
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');

    //si hay campos null ejecuta el mensaje
    if (!nombre) {
        mostrarMensaje("Ingrese su nombre!");
        return false; //detiene la ejecución y devuelve falso para que el form no se envíe
    }
    if (!apellido) {
        mostrarMensaje("Ingrese su apellido!");
        return false;
    }
    if (!email) {
        mostrarMensaje("Ingrese su email!");
        return false;
    }
    if (!mensaje) {
        mostrarMensaje("Escriba un mensaje!");
        return false;
    }

    //validar el formato del email
    if (!email.includes("@") || !email.includes(".")) {
        mostrarMensaje("Ingrese un mail válido!");
        return false;
    }

    //validar que se haya seleccionado al menos un ckeckbox

    if (checkbox.length === 0) {
        mostrarMensaje("Elija un tema de interés!!!");
        return false;
    }
    //Mensaje de éxito
    mostrarMensaje("¡Formulario enviado con éxito!");
    return true;
}

//se vincula la validación al evento que envía el formulario
const formulario = document.getElementById("formulario-contacto");
formulario.onsubmit = validarFormulario; //no se envía si falla la validación



