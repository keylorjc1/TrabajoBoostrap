// Async / await

function descargarNuevosClientes() {
    return new Promise(resolve =>{
        console.log('Descargando clientes espere...');

        setTimeout(function() {
            resolve('Los clientes descargados');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise(resolve =>{
        console.log('Descargando pedidos espere...');

        setTimeout(function() {
            resolve('Los pedidos descargados');
        }, 3000);
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }
}

app();