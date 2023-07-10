//Variables, esta forma de declarar es las versiones anteriores a ecmascript 6
var tema = 'HTML'; //Inicia la variables y se asigna valor
var disponible; //Iniciamos variable sin valor

tema = true; //Reasignar valor (javascript no es altamente tipado)

disponible = true;

var tema1 = 'CSS',
    disponible1 = true,
    contenido = 'Trabajo con CSS3';

//reglas no permitidas
// var 1disponibles;
// var -disponible;

//Estilos para las variables
var nombre_tema = 'HTML'; //underscore
var nombreTema = 'HTML'; //Camelcase -- más utilizado en javascript
var NombreTema = 'HTML'; //Pascal case -- se utilizan cuando se crean clases
var nombretema = 'HTML5';

//let 
let temaLet = 'HTML'; //Inicia la letiables y se asigna valor
let disponibleLet; //Iniciamos letiable sin valor

tema = true; //Reasignar valor (javascript no es altamente tipado)

disponible = true;

let tema1Let = 'CSS',
    disponible1Let = true,
    contenidoLet = 'Trabajo con CSS3';

//reglas no permitidas
// let 1disponibles;
// let -disponible;

//Estilos para las letiables
let nombre_temaLet = 'HTML'; //underscore
let nombreTemaLet = 'HTML'; //Camelcase -- más utilizado en javascript
let NombreTemaLet = 'HTML'; //Pascal case -- se utilizan cuando se crean clases
let nombretemaLet = 'HTML5Let';
//javascript es case sensitive
// console.log(nombretemaLet);


var valorVar = 33;
{
    var valorVar = 11;
    console.log(valorVar);
    valorVar = valorVar + 33;
    console.log(valorVar);
}

console.log(valorVar);


let valorLet = 34;
{
    let valorLet = 13;
    console.log(valorLet);
    valorLet = valorLet + 33;
    console.log(valorLet);
}

console.log("Iniciamos aquí");
console.log(this.valorVar);
console.log(this.valorLet);  //Undefined
console.log(valorLet);  //Correcto para variables let


//Constantes, esta forma de declarar es las versiones anteriores a ecmascript 6
const temaConst = 'HTML'; //Inicia la variables y se asigna valor
// const disponibleConst; //Iniciamos variable sin valor no se permite con constantes

// disponibleConst = true; //Reasignar valor a una constante

const tema1Const = 'CSS',
    disponible1Const = true,
    contenidoConst = 'Trabajo con CSS3';

//reglas no permitidas
// const 1disponibles;
// const -disponible;

//Estilos para las constantes
const nombre_temaConst = 'HTML'; //underscore
const nombreTemaConst = 'HTML'; //Camelcase -- más utilizado en javascript
const NombreTemaConst = 'HTML'; //Pascal case -- se utilizan cuando se crean clases
const nombretemaConst = 'HTML5';

//Consulta compañeros
const producto5 = "XYZ";
console.log(producto5);

const producto6 = producto5;

console.log(producto6);

let producto1 = "ABC";

console.log(producto1);

let producto2 = producto1;
producto2 = "456";

console.log(producto2);
console.log(producto1);