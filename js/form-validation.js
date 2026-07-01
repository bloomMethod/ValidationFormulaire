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


