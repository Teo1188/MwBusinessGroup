document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    const backgroundTab = document.querySelector(".background-tab");

    function verDocumento(url) {
        window.open(url, "_blank"); // Abre el documento en otra pestaña
    }

    const backgrounds = {
        
        energia: "url('/images/electricity2.jpg')",
        monitoreo: "url('/images/monitoring.jpg')",
        agua: "url('/images/water.jpg')"
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;

            // Remover clase activa de todos los tabs y ocultar todos los contenidos
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Agregar clase activa al tab seleccionado y mostrar contenido
            tab.classList.add("active");
            document.getElementById(category).classList.add("active");

            // Cambiar imagen de fondo con transición
            backgroundTab.style.backgroundImage = backgrounds[category];
            backgroundTab.style.backgroundImage = backgrounds[category];
backgroundTab.style.backgroundSize = "cover";
backgroundTab.style.backgroundPosition = "center";
backgroundTab.style.transition = "background-image 0.5s ease-in-out";



        });
    });
});