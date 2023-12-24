// Script pour une navigation fluide à l'intérieur de la page en utilisant les ancres
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSectionId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change d'image toutes les 2 secondes (2000ms)
}
