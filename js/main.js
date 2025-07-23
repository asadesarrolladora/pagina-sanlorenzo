(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // En tu archivo js/main.js o dentro de una etiqueta <script> en service.html

function toggleServiceDetail(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement) {
        if (detailElement.classList.contains('service-detail-visible')) {
            // Si está visible, lo ocultamos
            detailElement.classList.remove('service-detail-visible');
            detailElement.classList.add('service-detail-hidden');
        } else {
            // Si está oculto, lo mostramos
            // Opcional: Ocultar otros detalles abiertos para que solo uno esté visible a la vez
            // let openDetails = document.querySelectorAll('.service-detail-visible');
            // openDetails.forEach(function(detail) {
            //     detail.classList.remove('service-detail-visible');
            //     detail.classList.add('service-detail-hidden');
            // });

            detailElement.classList.remove('service-detail-hidden');
            detailElement.classList.add('service-detail-visible');

            // Opcional: Desplazarse al elemento recién expandido
            detailElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}


//codigo para el botón de "Ver Más" en la sección de servicios

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el hash de la URL (ej. "#industrial")
    const hash = window.location.hash;

    // Si existe un hash en la URL
    if (hash) {
        // Eliminar la clase 'active' de todas las pestañas y paneles
        document.querySelectorAll('.nav-link.active').forEach(function(tab) {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.tab-pane.show.active').forEach(function(pane) {
            pane.classList.remove('show', 'active');
        });

        // Encontrar el botón de la pestaña que corresponde al hash
        // El selector busca un botón con data-bs-target igual al hash
        const targetTabButton = document.querySelector(`button[data-bs-target="${hash}"]`);

        if (targetTabButton) {
            // Activar la pestaña
            const bsTab = new bootstrap.Tab(targetTabButton);
            bsTab.show();

            // Opcional: Desplazarse suavemente a la sección de las pestañas
            const tabSection = document.getElementById('dconstrucion'); // Asegúrate de que este ID sea el correcto para tu contenedor de pestañas
            if (tabSection) {
                tabSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});

    
})(jQuery);

