//Acciones para el Menú Hamburguesa en Mobile

function mobileHamburguesa (){
    //obtengo por ID el ícono y la lista del nav
    const hamburguesaIcono=document.getElementById("icono-hamburguesa");
    const listaH=document.getElementById("lista-hamburguesa");
    //escucho el evento click se ejecuta la función que alterna la clase la agrega o la quita
    hamburguesaIcono.addEventListener('click', function() {
        listaH.classList.toggle('mostrar');
    });
};

//una vez que carga todo el documento llamo a la función mobileHamburguesa
document.addEventListener('DOMContentLoaded',mobileHamburguesa)