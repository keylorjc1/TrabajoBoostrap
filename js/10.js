//POO
//Object Literals
const producto = {
    nombre: 'Monitor',
    precio: 175000
};

//Object constructor
//El nombre debe estar escrito en mayuscula (clase)
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

console.log(Producto);

const nuevoProducto = new Producto('Tablet', 1234567);

Producto.prototype.informacionProducto = function () {
    return `El nombre del producto es ${this.nombre} y el precio es ${this.precio}`;
}

console.log(nuevoProducto);