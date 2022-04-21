let contador = parseInt(localStorage.getItem("contadorArtistas"), 10);

if (isNaN(contador)) {
  contador = 0;
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
/* SUBIR IMG

// get user's uploaded image
const imgPath = document.querySelector("input[type=file]").files[0];
const reader = new FileReader();

reader.addEventListener(
  "load",
  function () {
    // convert image file to base64 string and save to localStorage
    fotoinput = reader.result;
  },
  false
);

if (imgPath) {
  reader.readAsDataURL(imgPath);
}
/* SUBIR IMG VERSION 2*/

function guardarArtista() {
  let nombreinput = document.getElementById("inputNombre").value;
  let descripcioninput = document.getElementById("inputDescripcion").value;
  let fotoinput = document.getElementById("fotoid").value;
  let playlistinput = document.getElementById("playlistInput").value;
  const artista = {
    nombre: nombreinput,
    descripcion: descripcioninput,
    foto: fotoinput.substr(-6),
    playlist: playlistinput
  };
  console.log("Se creó el artista");
  console.log(artista);
  const jsonObj = JSON.stringify(artista);
  localStorage.setItem("artista" + contador, jsonObj);
  contador += 1;
  console.log("Se guardó el artista");
  localStorage.setItem("contadorArtistas", contador);
}
