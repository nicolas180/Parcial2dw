let nombre;
let descripcion;
let foto;
let playlist;
let contenido = document.getElementById("contenido").innerHTML;

for (let index = 0; index < localStorage.length; index++) {
  var key = localStorage.key(index);
  var leer = localStorage.getItem(key);
  if (key.substring(0, 3) === "art") {
    //document.getElementById("contenido").innerHTML = leer;
    nombre = leer.nombre;
    descripcion = leer.descripcion;
    foto = leer.foto;
    playlist = leer.playlist;
    crear();
  }
}

function crear() {
  let nuevoArtista =
    '<div class="contenedorArtista1" name="contenedorArt"><div class="imagenArtista1"><img src="imagenes/' +
    foto +
    '"/></div><div class="playlist"><div id="playlistContenedor">' +
    playlist +
    '</div></div><div class="texto" id="texto"><h1>' +
    nombre +
    '</h1><br /><br /> <br /><h2 id="editable">' +
    descripcion +
    '</h2><input type="button" value="Editar" onclick="editar()" /> </div></div>';
  contenido += nuevoArtista;
  console.log("Creado nuevo div de artista");
  console.log(nuevoArtista);
}
