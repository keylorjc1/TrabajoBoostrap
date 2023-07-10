//Declaración de función
//las reglas para nombrar la función son iguales a las variables

function sumar() {
    console.log(10 + 10);
}


//JavaScript dos etapas de ejecución (registro o creación) y segunda ejecución
sumar();

//Expresión de función

const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

(function() {
    console.log('Esto es una función');
})();

function multiplicar(numero1 = 0, numero2 = 0) { //son parametros con valor por defecto
    console.log(numero1 * numero2);
}

multiplicar(10, 10); //argumentos completos

//parametros por defecto
multiplicar(10);
multiplicar();