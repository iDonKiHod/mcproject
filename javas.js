$(document).ready(function () {

    $("#inf1").hide();
    $("#inf2").hide();
    $("#inf3").hide();
    $("#inf4").hide();

    $("#bt1").click(function () {
        $('.wrapper').fadeOut('slow');
        $('#inf1').fadeIn('slow');
    })

    $("#bt2").click(function () {
        $("body").hide("slow");
    })

    $("#bt3").click(function () {
        $("body").hide("slow");
    })

    $("#bt4").click(function () {
        $("body").hide("slow");
    })

})

