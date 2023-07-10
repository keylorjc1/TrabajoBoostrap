//Clases
//Nombre de clases en mayusculas
class Producto {

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    informacionProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

//creación de una instancia
const producto = new Producto('Monitor', 257000);

console.log(producto);

//POO Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    informacionProducto(){
        return `${super.informacionProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript Inicios', 15000, '12345678dfgh');
console.log(libro.informacionProducto());

try {
    console.log("error");
} catch (error) {
    console.error(error);
}