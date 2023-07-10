//Métodos de propiedad

const reproductor = {
    marca: 'Sony',
    modelo: 'XYZ',

    reproducir : function (id) {
        console.log(`Reproduciendo la canción con id ${id}`);
    },

    pausar: function () {
        console.log('Pausando...');
    },

    informacion: function () {
        console.log(`El reproductor marca ${this.marca} es de modelo ${this.modelo}`);
    }
}

reproductor.reproducir(1);
reproductor.pausar();
reproductor.informacion();

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción con id ${id}`);
}

reproductor.borrarCancion(2);

console.log(reproductor);