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









