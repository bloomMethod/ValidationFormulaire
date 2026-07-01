// const formulario = document.getElementById("Formulario");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     let nombre = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (nombre === "") {
//       alert("Debes insertar un nombre");
//       return;
//     }
//     if (email === "" || !email.includes("@")) {
//       alert("Debes insertar un email valido");
//       return;
//     }
//     if ((password === "" || password.length < 6)) {
//       alert("Debes insertar una contraseña valida y de mas de 6 caracteres");
//       return;
//     }
//     if (password !== confirmarPassword) {
//       alert("Las contraseñas no coinciden");
//       return;
//     }
//     alert("Formulario enviado");
//   }
//   validarFormulario();
// });

/*------------------------------------------------------------------- */

// const formulario = document.getElementById("Formulario");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     let name = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       alert("Debes insertar un nombre valido");
//       return;
//     }
//     if (email === "" || !email.includes("@")) {
//       alert("Debes incertar un correo valido");
//       return;
//     }
//     if (password === "" || password.length < 6) {
//       alert("Debes insertar una contraseña valida");
//       return;
//     }
//     if (password !== confirmarPassword) {
//       alert("Las contraseñas no coiciden");
//       return;
//     }
//     alert("formulario enviado");
//   }
//   validarFormulario();
// });

/*-------------------------------------------------- */

// const formulario = document.getElementById("Formulario");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     let name = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       alert("Debes insertar un nombre valido");
//       return;
//     }
//     if (email === "" || !email.includes("@")) {
//       alert("Debes insertar un correo valido");
//       return;
//     }
//     if (password === "" || password.length < 6) {
//       alert("Debes insertar una contraseña valida de mas de 6 caracteres");
//       return;
//     }
//     if (password !== confirmarPassword) {
//       alert("Las contraseñas no coiciden");
//       return;
//     }
//     alert("Formulario enviado");
//   }
//   validarFormulario();
// });

/*---------------------------------------------------- */
// const formulario = document.getElementById("Formulario");
// const error = document.getElementById("error");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     error.innerText = "";
//     let name = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre valido";
//       return;
//     }

//     if (email === "" || !email.includes("@")) {
//       error.innerText = "Debes insertar un correo valido";
//       return;
//     }
//     if (password === "" || password.length < 6) {
//       error.innerText =
//         "La contraseña no es valida, debe tener minimo 6 caracteres";
//       return;
//     }
//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coiciden";
//       return;
//     }

//     let usuario = { nombre: name, email: email, password: password };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//     error.innerText = "formulario enviado";
//   }
//   validarFormulario();
// });
// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre + " de nuevo");
//   }
// }
// chargeForm();

/*---------------------------------------------------- */
// const formulario = document.getElementById("Formulario");
// const error = document.getElementById("error");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     error.innerText = "";
//     let name = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre valido";
//       return;
//     }
//     if (email === "" || !email.includes("@")) {
//       error.innerText = "Debes insertar un correo valido";
//       return;
//     }
//     if (password === "" || password.length < 6) {
//       error.innerText =
//         "Debes insertar una contraseña valida de mas de 6 caracteres";
//       return;
//     }
//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coinciden";
//       return;
//     }
//     error.innerText = "Formulario enviado";

//     let usuario = { nombre: name, email: email, password: password };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     error.innerText = "Bienvenido " + usuario.nombre;
//   }
// }
// chargeForm();

/*-------------------- */
// const formulario = document.getElementById("Formulario");
// const error = document.getElementById("error");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     error.innerText = "";
//     let name = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre valido";
//       return;
//     }
//     if (email === "" || !email.includes("@")) {
//       error.innerText = "Debes insertar un email valido";
//       return;
//     }
//     if (password === "" || password.length < 6) {
//       error.innerText = "La contraseña debe tener minimo 6 caracteres";
//       return;
//     }
//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coinciden";
//       return;
//     }
//     error.innerText = "Formulario enviado con éxito";

//     let usuario = { nombre: name, email: email, password: password };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*---------------------------------- */
// const formulario = document.getElementById("Formulario");
// const error = document.getElementById("error");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     error.innerText = "";

//     let name = document.getElementById("nombre").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmarPassword = document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre valido";
//       return;
//     }
//     if (email === "" || !email.includes("@")) {
//       error.innerText = "El correo no es valido";
//       return;
//     }
//     if (password === "") {
//       error.innerText = "Debes insertar una contraseña valida";
//       return;
//     } else if (password.length < 6) {
//       error.innerText = "la contraseña debe tener minimo 6 caracteres";
//       return;
//     }
//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coinciden";
//       return;
//     }
//     error.innerText = "Formulario enviado éxitosamente";

//     let usuario = { nombre: name, email: email, password: password };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido" + usuario.nombre);
//   }
// }
// chargeForm();

/*---------------------------------- */
// const formulario = document.getElementById("Formulario");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     const name = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmarPassword =
//       document.getElementById("confirmarPassword").value;
//     const error = document.getElementById("error");
//     error.innerText = "";
//     if (name === "") {
//       error.innerText = "Debes insertar un nombre valido";
//       return;
//     }
//     if (email === "") {
//       error.innerText = "Debes insertar un correo";
//       return;
//     } else if (!email.includes("@")) {
//       error.innerText = "Debes insertar un correo valido";
//       return;
//     }
//     if (password === "") {
//       error.innerText = "Debes insertar una contraseña";
//       return;
//     } else if (password.length < 6) {
//       error.innerText = "La contraseña debe tener mas de 6 caracteres";
//       return;
//     }
//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coiciden";
//       return;
//     }
//     error.innerText = "Formulario enviado con éxito";

//     let usuario = { nombre: name, email: email };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*------------- validacion de formulario echa a la primera - en 30 mn */

// const formulario = document.getElementById("Formulario");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     const name = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmarPassword =
//       document.getElementById("confirmarPassword").value;
//     const error = document.getElementById("error");
//     error.innerText = "";

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre";
//       return;
//     }

//     if (email === "") {
//       error.innerText = "Debes insertar un email";
//       return;
//     } else if (!email.includes("@")) {
//       error.innerText = "Debes insertar un email valido";
//       return;
//     }

//     if (password === "") {
//       error.innerText = "Debes insertar una contraseña valida";
//       return;
//     } else if (password.length < 6) {
//       error.innerText = "La contraseña debe tener almenos 6 digitos";
//       return;
//     }

//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coiciden";
//       return;
//     }

//     error.innerText = "Formulario enviado éxitosamente";
//     let usuario = { nombre: name, email: email };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*----------------------------- */

// const formulario = document.getElementById("Formulario");
// const error = document.getElementById("error");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     const name = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmarPassword =
//       document.getElementById("confirmarPassword").value;

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre";
//       return;
//     }
//     if (email === "") {
//       error.innerText = "Debes insertar un correo";
//       return;
//     } else if (!email.includes("@")) {
//       error.innerText = "Debes insertar un correo valido";
//       return;
//     }
//     if (password === "") {
//       error.innerText = "Debes insertar una contraseña";
//       return;
//     } else if (password.length < 6) {
//       error.innerText = "Debes insertar una contraseña con mas de 6 caracteres";
//       return;
//     }

//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coinciden";
//       return;
//     }
//     error.innerText = "Formulario enviado éxitosamente";

//     let usuario = { nombre: name, email: email };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*------------------- validacion de formulario echa - en 15mn - ningun 
bloqueo grande - ya domino carrito, lista de tareas y validacion de formularios con js
Solo me falta fetch / async await */
/* hoy debo dominar fetch/ async await  */
/* el jueves y viernes git 
Sabado + domingo repasar + hacer acabados en los cv y practicar funciones
en flecha + programar en voz alta.
La semana que viene es decir el lunes 29 de junio ya debo crear mi cuenta
en France Travail y subir mis cv y enviar cv a los puestos de 
trabajo que me interesan.
Preparme tambien por si me toca ir antes a france travail para una reunion
y que vean mi perfil para ayudarme a encontrar trabajo en lo que quiero */

/*--------------------------- */

// const formulario = document.getElementById("Formulario");

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function validarFormulario() {
//     const name = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmarPassword =
//       document.getElementById("confirmarPassword").value;
//     const error = document.getElementById("error");

//     error.value = "";
//     if (name === "") {
//       error.innerText = "Debes insertar un nombre valido";
//       return;
//     }

//     if (email === "") {
//       error.innerText = "Debes insertar un email";
//       return;
//     } else if (!email.includes("@")) {
//       return;
//     }

//     if (password === "") {
//       error.innerText = "Debes insertar una contraseña";
//       return;
//     } else if (password.length < 6) {
//       error.innerText = "La contraseña debe tener minimo 6 digitos";
//       return;
//     }

//     if (password !== confirmarPassword) {
//       error.innerText = "las contraseñas no coinciden";
//       return;
//     }
//     error.innerText = "Formulario enviado éxitosamente";

//     let usuario = { nombre: name, email: email };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();
/*solo me queda guardar el usuario que envio el formulario con localStorage
para que la proxima vez que abra la pagina me salga un alert diciendo hola + usuario.creado */
/* Formulario echo en 30mn - ningun error grande - siento que lo domino */

/*------------------------------------- */

// const formulario = document.getElementById("Formulario");

// function validarFormulario() {
//     const name = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmarPassword =
//       document.getElementById("confirmarPassword").value;
//     const error = document.getElementById("error");

//     if (name === "") {
//       error.innerText = "Debes insertar un nombre";
//       return;
//     }

//     if (email === "") {
//       error.innerText = "Debes insertar un email";
//       return;
//     } else if (!email.includes("@")) {
//       error.innerText = "Debes insertar un email valido";
//       return;
//     }

//     if (password === "") {
//       error.innerText = "Debes insertar una contraseña";
//       return;
//     } else if (password.length < 6) {
//       error.innerText = "Debes insertar una contraseña de mas de 6 digitos";
//       return;
//     }

//     if (password !== confirmarPassword) {
//       error.innerText = "Las contraseñas no coinciden";
//       return;
//     }
//     error.innerText = "Formulario enviado éxitosamente";
//     let usuario = {
//       nombre: name,
//       email: email,
//     };
//     localStorage.setItem("usuario", JSON.stringify(usuario));
//   }
//   /** es de buena practica definir la funcion fuera del addEventListener.
//    * Ademas el codigo se hace mas reutilizable*/
// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     console.log(usuario.nombre);
//     console.log(usuario.email);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*validacion de formulario echa en 15mn - sin ningun error / bloqueo grande
La domino */

/*------------------------------ */

// const formulario = document.getElementById("Formulario");

// function validarFormulario() {
//   const name = document.getElementById("nombre").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const confirmarPassword = document.getElementById("confirmarPassword").value;
//   const error = document.getElementById("error");

//   error.innerText = "";
//   if (name === "") {
//     error.innerText = "Debes insertar un nombre";
//     return;
//   }
//   if (email === "") {
//     error.innerText = "Debes insertar un correo";
//     return;
//   } else if (!email.includes("@")) {
//     error.innerText = "Debes insertar un correo valido";
//     return;
//   }

//   if (password === "") {
//     error.innerText = "Debes insertar una contraseña valida";
//     return;
//   } else if (password.length < 6) {
//     error.innerText = "La contraseña debe tener minimo 6 digitos";
//     return;
//   }

//   if (password !== confirmarPassword) {
//     error.innerText = "las contraseñas no coinciden";
//     return;
//   }

//   error.innerText = "Formulario enviado éxitosamente";

//   let usuario = {
//     nombre: name,
//     email: email,
//   };
//   localStorage.setItem("usuario", JSON.stringify(usuario));
// }

// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();
//   validarFormulario();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*------------------- validacion de formulario echa en 20Mn - ningun
error/bloqueo grande - debo dominar el codido y saber explicarlo paso a paso */

/*---------------- */
// const formulario = document.getElementById("Formulario");

// function validarFormulario() {
//   const name = document.getElementById("nombre").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const confirmarPassword = document.getElementById("confirmarPassword").value;
//   const error = document.getElementById("error");

//   error.innerText = "";
//   if (name === "") {
//     error.innerText = "Debes insertar un nombre";
//     return;
//   }

//   if (email === "") {
//     error.innerText = "Debes ingresar un correo";
//     return;
//   } else if (!email.includes("@")) {
//     error.innerText = "Debes insertar un correo valido";
//     return;
//   }

//   if (password === "") {
//     error.innerText = "Debes ingresar una contraseña";
//     return;
//   } else if (password.length < 6) {
//     error.innerText = "Debes ingresar una contraseña con mas de 6 digitos";
//     return;
//   }

//   if (password !== confirmarPassword) {
//     error.innerText = "Las contraseñas no coinciden";
//     return;
//   }

//   error.innerText = "Formulario enviado éxitosamente";

//   let usuario = {
//     nombre: name,
//     email: email,
//   };
//   localStorage.setItem("usuario", JSON.stringify(usuario));
// }

// formulario.addEventListener("submit", function (event) {
//   validarFormulario();
//   event.preventDefault();
// });

// function chargeForm() {
//   const data = localStorage.getItem("usuario");
//   if (data) {
//     let usuario = JSON.parse(data);
//     console.log(usuario.nombre);
//     console.log(usuario.email);
//     alert("Bienvenido " + usuario.nombre);
//   }
// }
// chargeForm();

/*------ validacion de formulario en 15mn - sin erros / grande bloques
- lo domino pero debo practicarlo diariamente */

/*--------------------------- */

const formulario = document.getElementById("Formulario");
const error = document.getElementById("error");

function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmarPassword = document.getElementById("confirmarPassword").value;

  error.innerText = "";
  if (nombre === "") {
    error.innerText = "Debes insertar un nombre";
    return;
  }
  if (email === "") {
    error.innerText = "Debes insertar un email";
    return;
  } else if (!email.includes("@")) {
    error.innerText = "Debes insertar un email valido";
    return;
  }

  if (password === "") {
    error.innerText = "Debes insertar una contraseña";
    return;
  } else if (password.length < 6) {
    error.innerText = "Debes insertar una contraseña con mas de 6 digitos";
    return;
  }

  if (password !== confirmarPassword) {
    error.innerText = "Las contraseñas no coinciden";
    return;
  }
  error.innerText = "Formulario enviado éxitosamente";
  let usuario = {
    nombre: nombre,
    email: email,
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

formulario.addEventListener("submit", function (event) {
  validarFormulario();

  event.preventDefault();
});

function chargeForm() {
  const data = localStorage.getItem("usuario");
  if (data) {
    let usuario = JSON.parse(data);
    alert("Bienvenido " + usuario.nombre);
  }
}
chargeForm();

/*---------------- validacion de formularios dominada - ahora debo
entender cada parte del codigo - sin ningun error/bloqueo grande - en 20mn */
/* practicar fetch/async await con enlaces dinamicos
git y github
practicar buscador de peliculas  - urgente despues de jugar ajedrez
funciones en flecha
metodo post,delete,put,get
hacer que una frase/palabras se escriba al revez */

