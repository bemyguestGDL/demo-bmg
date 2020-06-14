// var url = window.location.href;
// var swLocation = '/demo-bmg/sw.js'
// if(navigator.serviceWorker){
//     if(url.includes('localhost')){
//         swLocation = '/sw.js';
//     }
//     navigator.serviceWorker.register(swLocation);
// }

simplyCountdown('#cuenta', {
    year: 2021, 
    month: 3, 
    day: 21, 
    hours: 12,
    minutes: 0,
    seconds: 0,
    words: {
        days: 'DÍA',
        hours: 'HORA',
        minutes: 'MINUTO',
        seconds: 'SEGUNDO',
        pluralLetter: 'S'
    },
    plural: true, 
    inline: false, 
    inlineClass: 'simply-countdown-inline', 
    
    enableUtc: true, 
    onEnd: function() { return; }, 
    refresh: 1000, 
    sectionClass: 'simply-section', 
    amountClass: 'simply-amount', 
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false
});

$(document).ready(() => {
    // Mostrar y ocultar header
    var header = $('#header-em');
    $('#btn-abrir-header').on('click', () => {
        header.show(300);
    });
    $('#btn-ocultar-header').on('click', () => {
        header.hide(300);
    });
    // Final Mostrar y ocultar header

    // Desplazamiento con anclajes sección La Boda
    $('#a-laBoda').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });

    // Desplazamiento con anclajes sección Recomendaciones
    $('#a-recomendaciones').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });

    // Desplazamiento con anclajes sección Mesa de regalos
    $('#a-mesaDeRegalos').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });

    // Desplazamiento con anclajes sección Hospedaje
    $('#a-hospedaje').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });

    // Desplazamiento con anclajes sección RSVP
    $('#a-rsvp').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });
});