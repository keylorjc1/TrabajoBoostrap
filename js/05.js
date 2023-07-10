const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 250000,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//No modificar los datos orginales -> Spread Operator o Rest Operator
//Una buena práctica es no modificar y mutar los objetos originales

const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);