import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtner los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function () {
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active')
        });

        // Agregar la clase "active" al enlace actual
        this.classList.add('active')

        // Obetener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })

    //AGREGAR ACTIVE AL QUE CORRESPONDE
    // TRAER LA INFORMACION DEL OBJETO CORRESPONDIENTE A LA ELECCION
    // MOSTRAR EL CONTENIDO EN EL DOM
});

// Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}