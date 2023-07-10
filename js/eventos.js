// Ciclo de vida
// Eventos
console.log(1);

//window objeto global - nivel más alto que el document

window.addEventListener('load', imprimir);

function imprimir() {
    console.log(3);
}

window.onload = function () {
    console.log(4);
}

document.addEventListener('DOMContentLoaded', function () {
    console.log(2);
})