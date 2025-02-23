// Carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 6000);
showSlide(currentSlide);

// Navbar Scroll
const navbar = document.getElementById("navbar");

window.onscroll = function () {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Menú Hamburguesa
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//swiper
const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination", // Selector del paginador
        clickable: true, // Permite hacer clic en los puntos de paginación
    },
    navigation: {
        nextEl: ".swiper-button-next", // Selector del botón "siguiente"
        prevEl: ".swiper-button-prev", // Selector del botón "anterior"
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // En pantallas medianas, muestra 2 slides
        },
        1024: {
            slidesPerView: 3, // En pantallas grandes, muestra 3 slides
        },
    }

})