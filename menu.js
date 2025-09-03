document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    hamburgerButton.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Alternar la clase 'active' para mostrar/ocultar
        body.classList.toggle("menu-open"); // Alternar la clase 'menu-open' en el body

        // Cambiar el icono del botón entre hamburguesa y 'X'
        if (navLinks.classList.contains("active")) {
            hamburgerButton.innerHTML = "&#x2715;"; // Código Unicode para una 'X' de cerrar
        } else {
            hamburgerButton.innerHTML = "&#9776;"; // Código Unicode para el icono de hamburguesa
        }
    });

    // Cerrar el menú cuando se hace clic en un enlace (navegación interna)
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            body.classList.remove("menu-open");
            hamburgerButton.innerHTML = "&#9776;"; // Volver al icono de hamburguesa
        });
    });
});