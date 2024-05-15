function showSection(sectionId, backgroundUrl) {
  var windowWidth = window.innerWidth;

  // Verificar si estamos en dispositivos con pantalla inferior a 1400px
  var isMobile = windowWidth < 1400;
  // Obtener todas las secciones
  var sections = document.querySelectorAll("section");
  // Ocultar todas las secciones
  sections.forEach(function (section) {
    section.style.display = "none";
  });
  // Mostrar la sección deseada
  var sectionToShow = document.querySelector("." + sectionId);
  console.log(sectionId);
  if (sectionId == "musical") {
    if (isMobile) {
      var sectionTo = document.querySelector("." + "container");
      sectionTo.style.backgroundImage =
        'url("' + "https://cdn.glitch.global/de4d63a3-7396-4f2b-b77d-d13603f4e36c/fondoOneResponsive.svg?v=1715787338380" + '")';
    } else {
      var sectionTo = document.querySelector("." + "container");
      sectionTo.style.backgroundImage = 'url("' + backgroundUrl + '")';
    }
  } else if (sectionId == "drama") {
    if (isMobile) {
      var sectionTo = document.querySelector("." + "container");
      sectionTo.style.backgroundImage =
        'url("' + "https://cdn.glitch.global/de4d63a3-7396-4f2b-b77d-d13603f4e36c/fondoMusicalResponsive.svg?v=1715786925336" + '")';
    } else {
      var sectionTo = document.querySelector("." + "container");
      sectionTo.style.backgroundImage = 'url("' + backgroundUrl + '")';
    }
  }
  if (sectionToShow) {
    sectionToShow.style.display = "block";
    // Cambiar el fondo de la sección
  }
}
