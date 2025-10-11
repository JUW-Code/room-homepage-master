
const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".text-slide");
const prevBtn = document.querySelector(".arrow--left");
const nextBtn = document.querySelector(".arrow--right");

let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
    texts[idx].classList.toggle("active", idx === i);
  });
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

showSlide(index);

const hamburger = document.querySelector('.Hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
