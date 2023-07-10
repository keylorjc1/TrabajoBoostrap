let pagina = 1;

const cita = {
    nombre: '',
    fecha: '',
    hora: '',
    temas: []
}

document.addEventListener('DOMContentLoaded', function () {
   //consultar temas de temas.json
   mostrarTemas(); 

   //Resaltar el div actual segun el tab que se presione
   mostrarSeccion();

   //Ocultar o mostrar una sección según el tab seleccionado
   cambiarSeccion();

   //paginación siguiente y anterior
   paginaSiguiente();
   paginaAnterior();

   //Almacena el nombre digitado
   nombreCita();

   //Almacena la fecha del objeto
   fechaCita();

   //Almacenar la hora de la cita
   horaCita();

   //Deshabilitar fechas no validas
   deshabilitarFechaAnterior();
});

function mostrarSeccion() {
    //Eliminar mostrar-seccion de la sección anterior
    const seccionAnterior = document.querySelector('.mostrar-seccion');
    if(seccionAnterior){
        seccionAnterior.classList.remove('mostrar-seccion');
    }

    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    //Eliminar la clase actual en tab anterioo
    const tabAnterior = document.querySelector('.tabs .actual');
    if(tabAnterior){
        tabAnterior.classList.remove('actual');
    }

    //Resaltar el Tab actual
    const tab = document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('actual');
}

async function mostrarTemas() {
    try {
        const resultado = await fetch('./temas.json');
        const db = await resultado.json();

        const { temas } = db;

       // Generar el HTML
       temas.forEach( tema => {
            const { id, nombre, tiempo, imagen } = tema;

            // DOM Scripting
            // Generar nombre de tema
            const nombreTema = document.createElement('P');
            nombreTema.textContent = nombre;
            nombreTema.classList.add('nombre-tema');

            // Generar el tiempo del tema
            const tiempoTema = document.createElement('P');
            tiempoTema.textContent = `Minutos: ${tiempo}`;
            tiempoTema.classList.add('tiempo-tema');

            // Generar imagen del tema
            const imagenTema = document.createElement('IMG');
            imagenTema.src = `${imagen}`;
            imagenTema.classList.add('imagen-tema');

            // Generar div contenedor de tema
            const temaDiv = document.createElement('DIV');
            temaDiv.classList.add('tema');
            temaDiv.dataset.idtema = id;

            // Selecciona un tema para la cita
            temaDiv.onclick = seleccionarTema;

            // Inyectar tiempo y nombre al div de tema
            temaDiv.appendChild(nombreTema);
            temaDiv.appendChild(tiempoTema);
            temaDiv.appendChild(imagenTema);

            // Inyectarlo en el HTML
            document.querySelector('#temas').appendChild(temaDiv);
       } )
    } catch (error) {
        console.log(error);
    }
}

function seleccionarTema(e) {
    let elemento;

    //Forzar click al div
    if(e.target.tagName === 'P'){
        elemento = e.target.parentElement;
    }else {
        elemento = e.target;
    }

    if(elemento.classList.contains('seleccionado')){
        elemento.classList.remove('seleccionado');

        const id = parseInt(elemento.dataset.idtema);

        eliminarTema(id);
    }else {
        elemento.classList.add('seleccionado');

        const temaObj = {
            id: parseInt(elemento.dataset.idtema),
            nombre: elemento.firstElementChild.textContent,
            tiempo: elemento.firstElementChild.nextElementSibling.textContent
        }

        agregarTema(temaObj);
    }
}

function eliminarTema(id) {
    const { temas } = cita;
    cita.temas = temas.filter (tema => tema.id !== id);
}

function agregarTema(temaObj) {
    const { temas } = cita;
    cita.temas = [...temas, temaObj];

}

function cambiarSeccion() {
    const enlaces = document.querySelectorAll('.tabs button');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', event => {
            event.preventDefault();  //manejo de evento default
            pagina = parseInt(event.target.dataset.paso);
            mostrarSeccion();
        });
    });
}

function paginaSiguiente() {
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', () => {
        pagina ++;
        botonesPaginador();
    }); 
}

function paginaAnterior() {
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', () => {
        pagina --;
        botonesPaginador();
    }); 
}

function botonesPaginador() {
    const paginaSiguiente = document.querySelector('#siguiente');
    const paginaAnterior = document.querySelector('#anterior');

    if(pagina === 1) {
        paginaAnterior.classList.add('ocultar');
    }else if (pagina === 3){
        paginaSiguiente.classList.add('ocultar');
        paginaAnterior.classList.remove('ocultar');
        mostrarResumen();
    }else {
        paginaSiguiente.classList.remove('ocultar');
        paginaAnterior.classList.remove('ocultar');
    }

    mostrarSeccion();
}

function nombreCita() {
    const nombreInput = document.querySelector('#nombre');

    nombreInput.addEventListener('input', e => {
        const nombreTexto = e.target.value.trim();

        //Validación de que nombreTexto debe tener algo
        if(nombreTexto === '' || nombreTexto.length < 3){
            mostrarAlerta('Nombre no valido', 'error');
        }else {
            const alerta = document.querySelector('.alerta');
            if(alerta) {
                alerta.remove();
            }
            cita.nombre = nombreTexto;
        }
    });
}

function mostrarAlerta(mensaje, tipo) {
    //Si hay una alerta previa, entonces se crea la alerta sino no
    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia){
        return;
    }

    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');

    if(tipo === 'error'){
        alerta.classList.add('error');
    }

    //Insertar en el html
    const formulario = document.querySelector('.formulario');
    formulario.appendChild(alerta);

    //Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function fechaCita() {
    const fechaInput = document.querySelector('#fecha');
    fechaInput.addEventListener('input', e=> {

        const dia = new Date(e.target.value).getUTCDay();

        if([0, 6].includes(dia)){
            e.preventDefault();
            fechaInput.value = '';
            mostrarAlerta('Fines de semana no son permitidos', 'error');
        }else {
            if (validarFechaAnterior())
                cita.fecha = fechaInput.value;
        }
    });
}

function deshabilitarFechaAnterior() {
    const inputFecha = document.querySelector('#fecha');

    const fechaAhora = new Date();
    const year = fechaAhora.getFullYear();
    const mes = fechaAhora.getMonth() + 1;
    const dia = fechaAhora.getDay() + 1;

    const fechaDeshabilitar = `${year}-${mes}-${dia}`;

    inputFecha.min = fechaDeshabilitar;
}

function validarFechaAnterior() {
    let retorno = false;
    const inputFecha = document.querySelector('#fecha');

    const fechaAhora = new Date();
    const year = fechaAhora.getFullYear();
    const mes = fechaAhora.getMonth() + 1;
    const dia = fechaAhora.getDay() + 1;

    var d = new Date(inputFecha.value);

    if ( !!d.valueOf() ) {
        if(year >  d.getFullYear())
            mostrarAlerta('Año no válido', 'error');
        if(year <=  d.getFullYear() && mes > d.getMonth()+1)
            mostrarAlerta('Mes no válido', 'error');
        if(year <=  d.getFullYear() && mes <= d.getMonth()+1 && dia > d.getDate())
            mostrarAlerta('Día no válido', 'error');
        if(year <=  d.getFullYear() && mes <= d.getMonth()+1 && dia <= d.getDate())
            retorno = true;
    } 
    return retorno;
}

function horaCita() {
    const inputHora = document.querySelector('#hora');
    inputHora.addEventListener('input', e=> {
        const horaCita = e.target.value;
        const hora = horaCita.split(':');

        if(hora[0] < 10 || hora[0] > 18){
            mostrarAlerta('Hora no válida', 'error');
            setTimeout(() => {
                inputHora.value = '';
            }, 3000);
        }else {
            cita.hora = horaCita;
        }
    });
}

function mostrarResumen() {
    //Destructuring
    const { nombre, fecha, hora, temas } = cita;

    //Seleccioanr el resumen
    const resumenDiv = document.querySelector(".contenido-resumen");

    //Limpiar el HTML resumen
    while (resumenDiv.firstChild) {
        resumenDiv.removeChild(resumenDiv.firstChild);
    }

    //validación de objeto
    if(Object.values(cita).includes('')){
        const noTemas = document.createElement('P');
        noTemas.textContent = 'Faltan datos de temas, nombre, fecha o la hora';

        noTemas.classList.add('invalidar-cita');
        
        //resumen div
        resumenDiv.appendChild(noTemas);
        return;
    }

    const headingCita = document.createElement('H3');
    headingCita.textContent = 'Resumen de cita';

    //Mostrar el resumen
    const nombreCita = document.createElement('P');
    nombreCita.innerHTML = `<span>Nombre:</span> ${nombre}`;

    const fechaCita = document.createElement('P');
    fechaCita.innerHTML = `<span>Fecha: </span> ${fecha}`;

    const horaCita = document.createElement('P');
    horaCita.innerHTML = `<span>hora: </span> ${hora}`;

    const temasCita = document.createElement('DIV');
    temasCita.classList.add('resumen-temas');

    const headingTemas = document.createElement('H3');
    headingTemas.textContent = 'Resumen de temas';
    
    temasCita.appendChild(headingTemas);

    resumenDiv.appendChild(temasCita);

    temas.forEach(tema => {
        const { nombre, tiempo } = tema;
        const contenedorTema = document.createElement('DIV');
        contenedorTema.classList.add('contenedor-tema');

        const textoTema = document.createElement('P');
        textoTema.textContent = nombre;

        const tiempoTema = document.createElement('P');
        tiempoTema.textContent = tiempo;

        contenedorTema.appendChild(textoTema);
        contenedorTema.appendChild(tiempoTema);

        resumenDiv.appendChild(contenedorTema);
    }); 

    resumenDiv.appendChild(headingCita);
    resumenDiv.appendChild(nombreCita);
    resumenDiv.appendChild(fechaCita);
    resumenDiv.appendChild(horaCita);

}