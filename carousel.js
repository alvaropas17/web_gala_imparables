document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');
    const dots = Array.from(document.querySelectorAll('.dot'));

    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width; // Ancho de una diapositiva

    // Función para mover el carrusel a una diapositiva específica
    const moveToSlide = (track, currentSlide) => {
        track.style.transform = 'translateX(-' + currentSlide.style.left + ')';
    };

    // Función para actualizar los puntos de navegación
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('active');
        targetDot.classList.add('active');
    };

    // Función para cambiar la diapositiva
    const goToSlide = (index) => {
        carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
        updateDots(dots[currentIndex], dots[index]);
        currentIndex = index;
    };

    // Organizar las diapositivas con su posición inicial
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Event listener para el botón "Siguiente"
    nextButton.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    });

    // Event listener para el botón "Anterior"
    prevButton.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    });

    // Event listeners para los puntos de navegación
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Opcional: Auto-avance del carrusel
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }, 5000); // Cambia de diapositiva cada 5 segundos
});