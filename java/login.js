let c = 1234;
let u = "nicolas";

let c_encriptado;
let contraseña_encriptada;

let logged = localStorage.getItem("logged");

if (logged === "true") {
  logear();
}

function ir() {
  let nombre = document.login.username.value;

  if (nombre == u && contraseña_encriptada == c_encriptado) {
    window.location = "admin.html";
  }
}

function logear() {
  window.location = "admin.html";
}

function encriptar(elemento) {
  c_encriptado = btoa(c);

  let contraseña = document.login.password.value;
  contraseña_encriptada = btoa(contraseña);
  /* document.getElementById("resultado").innerHTML = palabra_codificada;*/
  console.log("c: " + c);
  console.log("c_encriptado: " + c_encriptado);
  console.log("contraseña: " + contraseña);
  console.log("contraseña encriptada: " + contraseña_encriptada);

  localStorage.setItem("c_encriptado", c_encriptado);
  localStorage.setItem("contraseña", contraseña);
  localStorage.setItem("contraseña encriptada", contraseña_encriptada);
  ir();
  localStorage.setItem("logged", true);
}

function volver() {
  window.location = "home.html";
}
