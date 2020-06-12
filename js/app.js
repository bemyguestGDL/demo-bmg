simplyCountdown('#cuenta', {
    year: 2021, // required
    month: 3, // required
    day: 21, // required
    hours: 12, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: 'DÍA',
        hours: 'HORA',
        minutes: 'MINUTO',
        seconds: 'SEGUNDO',
        pluralLetter: 'S'
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC as default
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
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

    // Mostrar y ocultar imágenes CÓMO, CUÁNDO Y DÓNDE
    $('#test').on('mouseover', () => {
        $('#test').hide();
        $('#teste').show();
    });
    $('#teste').on('mouseleave', () => {
        $('#teste').hide();
        $('#test').show();
    });

    $('#test2').on('mouseover', () => {
        $('#test2').hide();
        $('#teste2').show();
    });
    $('#teste2').on('mouseleave', () => {
        $('#teste2').hide();
        $('#test2').show();
    });
    $('#test3').on('mouseover', () => {
        $('#test3').hide();
        $('#teste3').show();
    });
    $('#teste3').on('mouseleave', () => {
        $('#teste3').hide();
        $('#test3').show();
    });
    // Final Mostrar y ocultar imágenes CÓMO, CUÁNDO Y DÓNDE

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