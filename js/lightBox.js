let i = 1;

function showSlides(i);
  
function plusSlides(x) {
  showSlides(i += x);
}
  
function currentSlide(x) {
  showSlides(i = x);
}
  
function showSlides(x) {
  let j;
  let slides = document.getElementsByClassName("direction");
  let dots = document.getElementsByClassName("g_list");

  if (x > slides.length) {
      i = 1
  }

  if (x < 1) {
      i = slides.length
  }

  for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
  }

  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[i - 1].style.display = "block";
  
  dots[i - 1].className += " active";
}