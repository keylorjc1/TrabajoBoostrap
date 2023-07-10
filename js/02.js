//Strings o cadenas de texto
//Se puede trabajar con comillas simples y dobles, sin mezclar
const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 20 pulgadas"); // No es muy común
const producto3 = new String("Monitor de 20 pulgadas"); //NO es común 

console.log(producto);
console.log(producto2);
console.log(producto3);

const producto4 = 'Monitor de 20 pulgadas "Patitos"';

//Escapar comillas
const producto5 = "Monitor de 20 pulgadas \"Patitos\"";

const nombre = 'Eduardo';
const email = 'egonzalez20725@ufide.ac.cr';

//Concatenación
console.log("Nombre del profesor: " + nombre + ", Email: " + email);
console.log("Nombre del profesor: " , nombre , ", Email: " , email); //otra sintaxis

//Template Strings - String Literals
console.log(`Nombre del profesor: ${nombre}, Email: ${email}`);

// function getNombre() {
//     return "Eduardo";
// }

//Métodos y propiedades de strings
console.log(email.length);


//IndexOf
console.log(email.indexOf("@ufide"));

//Includes (retorna true o false)
console.log(email.includes("@ufide"));