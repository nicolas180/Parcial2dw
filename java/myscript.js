/*Editar texto*/

function editar() {
  document.getElementById("texto").contentEditable = "true";
}

/*guardar los contenedores de artista*/
function guardar() {
  console.log("se guardaron los divs");
  var contenedores = document.getElementsByName("contenedorArt");
  for (let index = 0; index < contenedores.length; index++) {
    var element = contenedores[index].outerHTML;
    localStorage.setItem("cont" + index, element);
  }
}

/*agregar artista*/
function cargarPlaylist() {
  let playlist = document.getElementById("playlistInput").value;
  document.getElementById("playlistContenedor").innerHTML = playlist;
}

function crear() {
  let contenido = document.getElementById("contenido").innerHTML;
  let nuevoArtista =
    '<div class="contenedorArtista1" name="contenedorArt"><div class="imagenArtista1" id="result-image"><img id="img-result" src="src/davidg.jpg" /></div><div class="playlist"><iframestyle="border-radius: 12px;"src="https://open.spotify.com/embed/playlist/1qfsiGNVxdSzq7HH23s0Yc?utm_source=generator"width="100%"height="80"frameborder="0"allowfullscreen=""allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div><div class="texto" id="texto"><h1>David Guetta</h1><br /><br /><br /><h2 id="editable">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum. </h2><input type="button" value="Editar" onclick="editar()" /><input type="file" name="image" id="image" /></div></div>';
  contenido += nuevoArtista;
  console.log("Creado nuevo div de artista");
}

/* SUBIR IMG*/
if (document.querySelector("#foto")) {
  var foto = document.querySelector("#foto");
  foto.onchange = function (e) {
    var uploadFoto = document.querySelector("#foto").value;
    var fileimg = document.querySelector("#foto").files;
    var nav = window.URL || window.webkitURL;
    var contactAlert = document.querySelector("#form_alert");
    if (uploadFoto != "") {
      var type = fileimg[0].type;
      var name = fileimg[0].name;
      if (type != "image/jpeg" && type != "image/jpg" && type != "image/png") {
        contactAlert.innerHTML =
          '<p class="errorArchivo">El archivo no es válido.</p>';
        if (document.querySelector("#img")) {
          document.querySelector("#img").remove();
        }
        document.querySelector(".delPhoto").classList.add("notBlock");
        foto.value = "";
        return false;
      } else {
        contactAlert.innerHTML = "";
        if (document.querySelector("#img")) {
          document.querySelector("#img").remove();
        }
        document.querySelector(".delPhoto").classList.remove("notBlock");
        var objeto_url = nav.createObjectURL(this.files[0]);
        document.querySelector(".prevPhoto div").innerHTML =
          "<img id='img' src=" + objeto_url + ">";
      }
    } else {
      alert("No selecciono foto");
      if (document.querySelector("#img")) {
        document.querySelector("#img").remove();
      }
    }
  };
}

if (document.querySelector(".delPhoto")) {
  var delPhoto = document.querySelector(".delPhoto");
  delPhoto.onclick = function (e) {
    removePhoto();
  };
}

function removePhoto() {
  document.querySelector("#foto").value = "";
  document.querySelector(".delPhoto").classList.add("notBlock");
  document.querySelector("#img").remove();
}
/* SUBIR IMG*/
