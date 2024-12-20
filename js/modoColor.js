/********** FUNCION PARA CAMBIO DE COLOR ********/

let esVioleta = true; //el color por defecto es violeta, lo seteo en true

function cambiaColor() {
    const root = document.documentElement;
    const wappImagen = document.getElementById("wappimg");

    if (esVioleta) {
        //si esta en violeta seteo el estilo en color petroleo
        root.style.setProperty('--primary-color', '#123E52');
        root.style.setProperty('--secondary-color', '#1D5872');
        root.style.setProperty('--tertiary-color', '#3A7793');
        //también se cambia la imagen del ícono de whatsapp a color petroleo
        wappImagen.src = "assets/img/wapp_logoOIL.png";

        localStorage.setItem('modoColor','oil')
    } else { 
        //sino, significa que está en oil y se debe volver al color violeta
        root.style.setProperty('--primary-color', '#2D3250');
        root.style.setProperty('--secondary-color', '#424769');
        root.style.setProperty('--tertiary-color', '#7077A1');
        wappImagen.src = "assets/img/wapp_logo.png"; 
        localStorage.setItem('modoColor','violeta')

    }
    esVioleta=!esVioleta;
        
}

// Función para cargar el estado guardado al iniciar
document.addEventListener('DOMContentLoaded',function(){
    const root=document.documentElement;
    const wappImagen = document.getElementById("wappimg");
    const guardarModo = localStorage.getItem('modoColor');

    if (guardarModo=== 'oil') {
        root.style.setProperty('--primary-color', '#123E52');
        root.style.setProperty('--secondary-color', '#1D5872');
        root.style.setProperty('--tertiary-color', '#3A7793');
        //también se cambia la imagen del ícono de whatsapp a color oil
        wappImagen.src = "assets/img/wapp_logoOIL.png";
        esVioleta=false;
       }else{
        root.style.setProperty('--primary-color', '#2D3250');
        root.style.setProperty('--secondary-color', '#424769');
        root.style.setProperty('--tertiary-color', '#7077A1');
        wappImagen.src = "assets/img/wapp_logo.png"; 
        esVioleta=true;
       }
});