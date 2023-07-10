//Promises en JavaScript
// en los promises existen 3 valores
//Pending: No se ha cumplido pero no se ha rechazado
// FulFilled: Ya se cumplio
// Rejected: Se ha rechazado y no se pudo cumplir

const usuarioAutenticado = new Promise((resolve, reject) =>{
    const auth = false;

    if(auth){
        resolve('Usuario autenticado'); //Fulfilled
    }else{
        reject('No se pudo iniciar sesión'); //Rejected
    }
});

// usuarioAutenticado
//     .then(function (resultado) {
//         console.log(resultado); //resolve
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

usuarioAutenticado 
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));