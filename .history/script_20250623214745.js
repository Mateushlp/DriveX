function scrollToCars() {
  document.getElementById('carros').scrollIntoView({ behavior: 'smooth' });
}










// --- Carrossel ---
const slides = document.querySelectorAll(".slides img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;
let slideInterval;
const slideDelay = 4000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Avança slide automaticamente
function startSlideShow() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, slideDelay);
}

// Pausa o slideshow
function pauseSlideShow() {
  clearInterval(slideInterval);
}