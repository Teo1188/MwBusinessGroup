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


//lenguage

// Función para obtener el nombre de la página actual
function getCurrentPage() {
    const path = window.location.pathname; // Obtiene la ruta del archivo actual

    // Si la ruta es la raíz (/), devuelve 'index'
    if (path === '/' || path === '/index.html') {
        return 'index';
    }

    // Extrae el nombre del archivo sin la extensión
    const page = path.split('/').pop().split('.')[0];
    return page;
}


function changeLanguage(language, page) {
    fetch(`${language}.json`)
        .then(response => response.json())
        .then(data => {
            const pageData = data[page];
            for (const key in pageData) {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = pageData[key];
                }
            }
        })
        .catch(error => console.error('Error loading language file:', error));
}


// Evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const espButton = document.getElementById('esp');
    const engButton = document.getElementById('eng');
    const currentPage = getCurrentPage();

    // Cargar el idioma guardado
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage, currentPage);


    espButton.addEventListener('click', function() {
        changeLanguage('es', currentPage);
        localStorage.setItem('language', 'es');
    });

    engButton.addEventListener('click', function() {
        changeLanguage('en', currentPage);
        localStorage.setItem('language', 'en');
    });

});