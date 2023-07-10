const archivo = 'https://jsonplaceholder.typicode.com/users';

// function obtenerEmpleados() {
//     fetch(archivo)
//     .then(resultado => {
//         return resultado.json();
//     })
//     .then(datos => {
//         // console.log(datos);
//         datos.empleados.forEach(empleado => {
//             console.log(empleado);
//             console.log(empleado.id);
//             console.log(empleado.nombre);
//             console.log(empleado.puesto);
//         });
//     })
// }

async function obtenerEmpleados() {
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    datos.forEach(empleado => {
        console.log(empleado);
        // console.log(empleado.id);
        // console.log(empleado.nombre);
        // console.log(empleado.puesto);
    });
}

obtenerEmpleados();