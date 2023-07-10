//Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];


console.log(numeros[1]);
console.log(numeros[100]);  //undefined fuera de rango

//Concerla extensión de los arreglos
console.log(numeros.length);

//foreach
numeros.forEach(function (numero) {
    console.log(numero);
});

numeros.push(60, 70, 80, 90); //agrega al final


numeros.unshift(-30, -20, -10);  //agrega al inicio

console.table(numeros);
console.log((numeros.length -2));
console.log(numeros.splice(11,1));  //eliminar en medio
// console.log(numeros.pop()); //elimina al final del arreglo
// console.log(numeros.shift()); //Elimina el primer elemento del arreglo

console.table(numeros);