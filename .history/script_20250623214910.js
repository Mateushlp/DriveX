function scrollToCars() {
  document.getElementById('carros').scrollIntoView({ behavior: 'smooth' });
}










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

if (slides.length && prevButton && nextButton) {
  showSlide(currentIndex);
  startSlideShow();

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
    pauseSlideShow();
    startSlideShow();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    pauseSlideShow();
    startSlideShow();
  });

  // Pausar slideshow ao passar mouse sobre carrossel
  const carrosel = document.querySelector(".carrosel");
  if (carrosel) {
    carrosel.addEventListener("mouseenter", pauseSlideShow);
    carrosel.addEventListener("mouseleave", startSlideShow);
  }
}