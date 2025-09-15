document.addEventListener("DOMContentLoaded", () => {
    // Animación de la flecha
    const arrow = document.querySelector('img[src*="doble-flecha-abajo"]');
    if (arrow) {
        // Verifica si el usuario ya ha visitado la página antes
        if (!sessionStorage.getItem('arrowAnimationShown')) {
            // Configura la animación inicial
            arrow.style.opacity = '0';
            arrow.style.transform = 'translateY(-20px)';
            arrow.style.transition = 'opacity 1s ease-in-out, transform 0.5s ease-in-out';

            // Muestra la flecha con animación después de un segundo
            setTimeout(() => {
                arrow.style.opacity = '1';
                arrow.style.transform = 'translateY(0)';
                
                // Inicia la animación de rebote
                let isUp = false;
                const bounceInterval = setInterval(() => {
                    if (isUp) {
                        arrow.style.transform = 'translateY(0)';
                    } else {
                        arrow.style.transform = 'translateY(-10px)';
                    }
                    isUp = !isUp;
                }, 1000);

                // Detiene la animación cuando el usuario hace scroll
                const stopAnimation = () => {
                    clearInterval(bounceInterval);
                    window.removeEventListener('scroll', stopAnimation);
                };
                window.addEventListener('scroll', stopAnimation);
            }, 1000);

            // Marca que la animación ya se mostró en esta sesión
            sessionStorage.setItem('arrowAnimationShown', 'true');
        }
    }

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