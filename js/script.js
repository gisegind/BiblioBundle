//*************MENÚ HAMBURGUESA MOBILE ***************/

function mobileHamburguesa() {
    //obtengo por ID el ícono y la lista del nav
    const hamburguesaIcono = document.getElementById("icono-hamburguesa");
    const listaH = document.getElementById("lista-hamburguesa");
    //escucho el evento click, se ejecuta (función anónima) el metodo toogle que alterna la clase la agrega o la quita
    hamburguesaIcono.addEventListener('click', function () {
        listaH.classList.toggle('mostrar');
    });
};
//una vez que carga todo el documento llamo a la función mobileHamburguesa
document.addEventListener('DOMContentLoaded', mobileHamburguesa)


//******Consumo de datos de un archivo JSON******//
//capturo el contenedor del HTML por su ID
let fraseAutor = document.getElementById("api")
fetch("frases.json")
    //con fetch obtuve una promesa response y necesito transformarla a algo legible como un json
    .then((response) => response.json())
    .then((miJson) => {
        //declaro la constante fraseAleatoria y le almaceno del array miJson(JSON) el valor de un índice aleatorio...
        //con la función Math.random()genero un número decimal aleatorio entre 0 < 1 se multiplica por la longitud del array miJson con floor lo redondeo
        const fraseAleatoria = miJson[Math.floor(Math.random() * miJson.length)]
        //console.log(fraseAleatoria)

        //guardo el resultado obtenido en los spans
        document.getElementById("frase").textContent = fraseAleatoria.frase
        document.getElementById("autor").textContent = `- ${fraseAleatoria.autor}`;

    });
//************** JUEGO INTERACTIVO ******************/
//creo un array con preguntas (pregunta, posibles respuetas, el índice de la respuesta correcta)
const preguntas = [
    {
        pregunta: "Qué significa HTML?",
        opciones: ["HyperText Markup Language", "Home Tool Markup Language", "HyperText Machine Language"],
        correcta: 0

    },
    {
        pregunta: "Cuál es el propósito de CSS?",
        opciones: ["Definir el comportamiento de las páginas web", "Aplicar estilos y manejar la estética de una web", "Almacenar los datos en la web"],
        correcta: 1

    },
    {
        pregunta: "Cuál de las características corresponde a un elemento en bloque (block) HTML?",
        opciones: ["Ocupa solo el espacio necesario y no comienza en nueva línea", "Se usa para formatear el texto en negrita", "Comienza en una nueva línea y ocupa todo el ancho disponible"],
        correcta: 2

    },
    {
        pregunta: "Qué hace el método 'console.log()' en JavaScript?",
        opciones: ["Imprime algo en la consola", "Detiene la ejecución del código", "Abre una ventana emergente"],
        correcta: 0

    },
    {
        pregunta: "Cual es la principal diferencia entre rutas absolutas y relativas en HTML?",
        opciones: ["Las relativas comienzan con barra inclinada", "Las relativas dependen de la ubicación del HTML actual y las absolutas comienzan con 'http'", "Las absolutas se utilizan en servidores locales"],
        correcta: 1

    },

    {
        pregunta: "Qué selector en CSS aplica estilos a todos los elementos de un documento?",
        opciones: ["Selector ID", "Selector de Clase", "Selector Universal (*)"],
        correcta: 2

    },
    {
        pregunta: "Que comando GIT se utiliza para subir los cambios locales a un repositorio remoto",
        opciones: ["git init", "git push", "git commit"],
        correcta: 1

    },
    {
        pregunta: "Cual es la diferencia de utilizar Grid frente a Flexbox",
        opciones: ["Grid es unidimensional", "Grid trabaja tanto con filas como con columnas simultáneamente", "Flexbox no es compatible con todos los dispositivos"],
        correcta: 1

    },

    {
        pregunta: "Qué función se utiliza para manejar la respuesta de una API en formato JSON cuando se utiliza fetch()",
        opciones: ["response.fetch()", "response.json()", "response.text()"],
        correcta: 1

    },

    {
        pregunta: "Cual de los siguientes métodos se utiliza para seleccionar un elemento del DOM por su ID",
        opciones: ["getElementbyId()", "querySelector()", "getElementbyClassName"],
        correcta: 0

    },

    {
        pregunta: "Cuál es la diferencia entre usar eventos en atributos HTML y el método addEventListener",
        opciones: ["addEventListener solo se puede usar para eventos de teclado", "Los eventos HTML son más eficientes", "addEventListener permite asignar múltiples eventos y los atributos HTML no"],
        correcta: 2

    }

];

let respuestaActual=0; //variable con registro de la respuesta actual
let puntaje= 0;  //variable que cuenta la cantidad de respuestas correctas

//muestro en pantalla preguntas
function descargarPreguntas(){
    const pregunta= preguntas[respuestaActual]; // obtengo la pregunta de indice correspondiente a respuestaActual
    //obtengo del DOM los elementos según su ID y muestro en el HTML con textContent la pregunta y las opciones de respuesta
    document.getElementById("pregunta").textContent=pregunta.pregunta; 
    document.getElementById("op1").textContent=pregunta.opciones[0];
    document.getElementById("op2").textContent=pregunta.opciones[1];
    document.getElementById("op3").textContent=pregunta.opciones[2];

}

//verifico si la respuesta elegida es la correcta.
function revisarRespuesta(opcionElegida){
    const pregunta= preguntas[respuestaActual]; // obtengo la pregunta de indice correspondiente a respuestaActual
    if (opcionElegida === pregunta.correcta) { //comparo si la opcion elegida coincide con el índice
        puntaje++; //incremento el puntaje si coindice
        alert ("Respuesta Correcta!"); 
        }else{
            alert ("Respuesta Incorrecta!")
        }
        //obtengo el ID de puntaje en el HTML y muestro con textContent el resultado actual
        document.getElementById("puntos").textContent = "Puntaje: "+puntaje; 
}
//con un click llamo llamo a una función anónima que ejecuta revisarRespuesta que compara con el índice correspondiente
document.getElementById("op1").onclick=  function(){revisarRespuesta(0); };
document.getElementById("op2").onclick=  function(){revisarRespuesta(1); };
document.getElementById("op3").onclick=  function(){revisarRespuesta(2); };

//se ejecuta con un click en el botón siguiente
function siguientePregunta(){
    respuestaActual++; //incremento en uno el índice
    //se van a descargar las pregutnas hasta llegar al final del arreglo
    if(respuestaActual < preguntas.length){
        descargarPreguntas();
    }else{
        alert ("¡Haz completado el desafía! tu puntaje es: " + puntaje + " de " +preguntas.length)
    }
}

descargarPreguntas(); //me aseguro que se muestra la primer pregunta al cargar la página


/************** VALIDACIONES EN FORMULARIO ***************/
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

    //valido el formato del email
    if (!email.includes("@") || !email.includes(".")) {
        mostrarMensaje("Ingrese un mail válido!");
        return false;
    }

    //valido que se haya seleccionado al menos un ckeckbox

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







