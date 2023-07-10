//Crear un arreglo de objetos
const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 250000 },
    { nombre: 'Televisión de 20 pulgadas', precio: 375000 },
    { nombre: 'Tablet', precio: 100000 },
    { nombre: 'Pc', precio: 550000 },
    { nombre: 'Parlantes', precio: 25000 },
    { nombre: 'Teclado', precio: 14000 },
    { nombre: 'Audifonos', precio: 22000 }
];

//foreach
carrito.forEach(function (articulo) {
    if (articulo.precio > 375000) {
        console.log(articulo.nombre);  
    }
});

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//Include arreglos planos
let resultado = meses.includes('Marzo');

// some
resultado = carrito.some(function (articulo) {
    return articulo.nombre === 'Tablet';
})

//reduce
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio;
}, 0)

//Filter
resultado = carrito.filter(function (articulo) {
    return articulo.precio > 100000;
})

carrito.forEach(articulo => {
    if (articulo.precio > 100000) {
        console.log(articulo.nombre);  
    }
}); //función arrow

resultado = carrito.map(articulo => {
        return articulo.nombre + " - " + articulo.precio;  
}); 

resultado = carrito.map(articulo => `${articulo.nombre} -  ${articulo.precio}`);

console.log(resultado);