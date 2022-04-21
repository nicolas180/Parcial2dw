for (let index = 0; index < localStorage.length; index++) {
  var key = localStorage.key(index);
  var leer = localStorage.getItem(key);
  //document.getElementById("contenido").innerHTML = leer;
  let contenido = document.getElementById("contenido");
  let imagen = document.createElement("img");
  imagen.src = leer.foto;
  contenido.append(imagen);
}

function desencriptar(elemento) {
  var palabra = document.getElementsByTagName("input")[0].value;
  var palabra_descodificada = atob(palabra);
  document.getElementById("resultado").innerHTML = palabra_descodificada;
}
