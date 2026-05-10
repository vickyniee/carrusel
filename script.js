document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de Swiper.js
    const swiper = new Swiper('.productSwiper', {

        // Configuraciones básicas
        direction: 'horizontal',
        loop: true, //  carrusel  infinito
        grabCursor: true, // Cambia el cursor a una manito para indicar que se puede arrastrar

        // Autoplay 
        autoplay: {
            delay: 3500, // Tiempo entre cada slide 3.5 segundos
            disableOnInteraction: false, // No detener el autoplay si el usuario interactúa
            pauseOnMouseEnter: true, // Pausar cuando el mouse está sobre una tarjeta
        },

        // puntos de abajo
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        // flechas laterales
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Diseño Responsive
        // Se adapta a cualquier tamaño de pantalla automáticamente (ya lo probre y considero que se ve bien, cualquier cosita si no te parece pues le cambias)
        breakpoints: {
            // Teléfonos pequeños (Desde 320px)
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true
            },
            // Teléfonos grandes o Tablets pequeñas (Desde 576px)
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true
            },
            // Tablets en horizontal y Laptops pequeñas (Desde 768px)
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // Pantallas de escritorio (Desde 1024px)
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
});
