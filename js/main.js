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

    // Si existe un hash en la URL Y no es solo '#'
    if (hash && hash !== '#') {
        // Encontrar el botón de la pestaña que corresponde al hash
        const targetTabButton = document.querySelector(`button[data-bs-target="${hash}"]`);

        if (targetTabButton) {
            // **IMPORTANTE: Primero, ocultar la pestaña activa actual si no es la que queremos mostrar**
            // Si la pestaña "Residencial" (o cualquier otra por defecto) está activa, la desactivamos
            const defaultActiveTabButton = document.querySelector('#designTabs .nav-link.active');
            const defaultActiveTabPane = document.querySelector('#designTabsContent .tab-pane.show.active');

            if (defaultActiveTabButton && defaultActiveTabButton !== targetTabButton) {
                // Si hay una pestaña activa por defecto Y no es la que queremos activar
                const bsDefaultTab = new bootstrap.Tab(defaultActiveTabButton);
                bsDefaultTab.hide(); // Oculta la pestaña activa por defecto
            }

            // Activar la pestaña deseada
            const bsTab = new bootstrap.Tab(targetTabButton);
            bsTab.show();

            // Opcional: Desplazarse suavemente a la sección de las pestañas
            const tabSection = document.getElementById('dconstrucion');
            if (tabSection) {
                tabSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});


    
})(jQuery);

