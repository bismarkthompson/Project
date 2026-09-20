const navToggle = document.querySelector('#navToggle');
const primaryNav = document.querySelector('#primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    }
  });
}

const gallery = document.querySelector('#gallery');
const galleryTrack = document.querySelector('#galleryTrack');
const gallerySlides = galleryTrack ? [...galleryTrack.children] : [];
const galleryDots = document.querySelector('#galleryDots');
const previousButton = document.querySelector('#galleryPrev');
const nextButton = document.querySelector('#galleryNext');
let currentSlide = 0;

function showSlide(index) {
  if (!galleryTrack || !galleryDots || gallerySlides.length === 0) return;

  currentSlide = (index + gallerySlides.length) % gallerySlides.length;
  galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  [...galleryDots.children].forEach((dot, dotIndex) => {
    const active = dotIndex === currentSlide;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-current', active ? 'true' : 'false');
  });
}

if (gallery && galleryTrack && galleryDots) {
  gallery.setAttribute('tabindex', '0');

  gallerySlides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery-dot';
    dot.setAttribute('aria-label', `Show portfolio item ${index + 1}`);
    dot.addEventListener('click', () => showSlide(index));
    galleryDots.appendChild(dot);
  });

  previousButton?.addEventListener('click', () => showSlide(currentSlide - 1));
  nextButton?.addEventListener('click', () => showSlide(currentSlide + 1));
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(currentSlide - 1);
    if (event.key === 'ArrowRight') showSlide(currentSlide + 1);
  });
  showSlide(0);
}

const contactForm = document.querySelector('#contactForm');
const formFields = [
  { input: document.querySelector('#name'), error: document.querySelector('#nameError'), message: 'Please enter your name.' },
  { input: document.querySelector('#email'), error: document.querySelector('#emailError'), message: 'Please enter a valid email address.' },
  { input: document.querySelector('#message'), error: document.querySelector('#messageError'), message: 'Please tell us what service you would like.' }
];
const successMessage = document.querySelector('#formSuccess');

function validateField(field) {
  const value = field.input.value.trim();
  const valid = value && (field.input.type !== 'email' || field.input.validity.valid);
  field.input.classList.toggle('invalid', !valid);
  field.input.setAttribute('aria-invalid', String(!valid));
  field.error.textContent = valid ? '' : field.message;
  return valid;
}

if (contactForm) {
  formFields.forEach((field) => field.input.addEventListener('input', () => validateField(field)));

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = formFields.every(validateField);
    successMessage.textContent = isValid
      ? 'Thanks — this demo form is ready for your booking request.'
      : '';
    if (isValid) contactForm.reset();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
