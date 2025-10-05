
// Select slides and texts
const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".text-slide");
const prevBtn = document.querySelector(".arrow--left");
const nextBtn = document.querySelector(".arrow--right");

let index = 0;

// Show current slide + text
function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
    texts[idx].classList.toggle("active", idx === i);
  });
}

// Previous button
prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Next button
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Initialize
showSlide(index);
