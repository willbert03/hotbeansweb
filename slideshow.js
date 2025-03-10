let slideIndex = 0;
let slideInterval;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  slides[slideIndex].classList.add("active");
  dots[slideIndex].className += " active-dot";

  slideInterval = setTimeout(() => {
    slideIndex++;
    showSlides();
  }, 5000); // 3 seconds delay
}

function plusSlides(n) {
  clearTimeout(slideInterval);
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  clearTimeout(slideInterval);
  slideIndex = n;
  showSlides();
}

showSlides();
