const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const autoScrollInterval = 3000; // Time in milliseconds for auto-scroll
let autoScrollTimer;

// Function to update the carousel position
function updateCarousel() {
  const slideWidth = slides[0].clientWidth + 10; // Include gap
  const offset = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Function to move to the next slide
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

// Function to move to the previous slide
function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
  goToPrevSlide();
  resetAutoScroll();
});

nextButton.addEventListener('click', () => {
  goToNextSlide();
  resetAutoScroll();
});

// Start auto-scrolling
function startAutoScroll() {
  autoScrollTimer = setInterval(goToNextSlide, autoScrollInterval);
}

// Stop auto-scrolling
function stopAutoScroll() {
  clearInterval(autoScrollTimer);
}

// Reset auto-scrolling when a button is clicked
function resetAutoScroll() {
  stopAutoScroll();
  startAutoScroll();
}

// Initialize carousel
updateCarousel();
startAutoScroll();

gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );

 