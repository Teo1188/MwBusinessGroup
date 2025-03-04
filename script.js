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

// Función para abrir/cerrar el menú
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-links a'); // Selecciona todos los enlaces del menú

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cierra el menú
    });
});

// Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
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
});


//lenguajes
document.addEventListener('DOMContentLoaded', function() {
    const espButton = document.getElementById('esp');
    const engButton = document.getElementById('eng');

    espButton.addEventListener('click', function() {
        changeLanguage('es');
    });

    engButton.addEventListener('click', function() {
        changeLanguage('en');
    });

    function changeLanguage(language) {
        fetch(`${language}.json`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('Inicio').textContent = data.Inicio;
                document.getElementById('Monitoreo').textContent = data.Monitoreo;
                document.getElementById('Ahorro').textContent = data.Ahorro;
                document.getElementById('Eficiencia').textContent = data.Eficiencia;
                document.getElementById('welcome').textContent = data.welcome;
                document.getElementById('herosub').textContent = data.herosub;
                document.getElementById('ver_mas').textContent = data.ver_mas;
                document.getElementById('ver_mas2').textContent = data.ver_mas2;
                document.getElementById('ver_mas3').textContent = data.ver_mas3;
                document.getElementById('ver_mas4').textContent = data.ver_mas4;
                document.getElementById('acondicionador_agua').textContent = data.acondicionador_agua;
                document.getElementById('eficiencia_agua').textContent = data.eficiencia_agua;
                document.getElementById('ahorro_energia').textContent = data.ahorro_energia;
                document.getElementById('ahorro_30').textContent = data.ahorro_30;
                document.getElementById('w_valve').textContent = data.w_valve;
                document.getElementById('ahorro_factura_agua').textContent = data.ahorro_factura_agua;
                document.getElementById('nuestras_soluciones').textContent = data.nuestras_soluciones;
                document.getElementById('monitoreo').textContent = data.monitoreo;
                document.getElementById('soluciones_monitoreo').textContent = data.soluciones_monitoreo;
                document.getElementById('ahorro_energia_text').textContent = data.ahorro_energia_text;
                document.getElementById('aire_acondicionado').textContent = data.aire_acondicionado;
                document.getElementById('acondicionador_agua_text').textContent = data.acondicionador_agua_text;
                document.getElementById('agua_avanzado').textContent = data.agua_avanzado;
                document.getElementById('w_valve_text').textContent = data.w_valve_text;
                document.getElementById('ahorro_eficiencia_agua').textContent = data.ahorro_eficiencia_agua;
                document.getElementById('optimizacion_aire').textContent = data.optimizacion_aire;
                document.getElementById('manera_inteligente').textContent = data.manera_inteligente;
            })
            .catch(error => console.error('Error loading language file:', error));
    }
});