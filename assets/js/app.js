var img = document.getElementsByClassName("animal");
var selection = document.getElementById("select");

selection.onchange = function(){
  if (selection.value == "original") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
    }
  }

  if (selection.value == "blanco-negro") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
      img[i].classList.add("blanco-negro");
    }
  }

  if (selection.value == "invertir-colores") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("sepia");
      img[i].classList.remove("original");
      img[i].classList.add("invertir-colores");
    }
  }

  if (selection.value == "sepia") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("original");
      img[i].classList.remove("blanco-negro");
      img[i].classList.add("sepia");
    }
  }
}
