//Objetos notación literal
// const nombreProducto = "Monitor de 20 pulgadas";
// const precio = 200000;
// const disponible = true;

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200000,
    disponible: true
};

console.log(producto);

//sintaxis de punto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

//arreglo asociativo y su llave que es igual al nombre de la propiedad
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);


//Sintaxis forma anterior
// const nombreProducto = producto.nombreProducto;
// const precio = producto.precio;
// const disponible = producto.disponible;

//Destructuring de objetos
const {nombreProducto, precio, disponible} = producto;

//podemos crear nuevas propiedades
producto.imagen = 'imagen.png';

console.log(nombreProducto);

//Eliminar propiedades
delete producto.disponible;

producto.precio = 200;

console.log(producto);

// Object.freeze(producto);
// //No permite agregar nuevos elementos
// producto.categoria = "XYZ";
// //No me permite eliminar propiedades
// delete producto.nombreProducto;
// //no marca error porque se trabaja en modo relajado
// //No permite cambiar el valor
// producto.nombreProducto = "Nuevo nombre";
// console.log(producto);

Object.seal(producto);
//No permite agregar nuevos elementos
producto.categoria = "ABC";
//No me permite eliminar propiedades
delete producto.precio;
producto.precio = 450000;
console.log(producto);