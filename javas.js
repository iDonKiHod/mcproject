$(document).ready(function () {

    $("#inf1").hide(); /*Скрывает первое окно*/
    $("#inf2").hide(); /*Скрывает второе окно*/
    $("#inf3").hide(); /*Скрывает третье окно*/
    $("#inf4").hide(); /*Скрывает четвертое окно*/

    /* Кнопка 'След в Интернете' */
    $("#bt1").click(function () {
        $('.wrapper').fadeOut('slow'); /*Скрывает обёртку*/
        $('#inf2').fadeOut(); /*Скрывает второе окно*/
        $('#inf3').fadeOut(); /*Скрывает третье окно*/
        $('#inf4').fadeOut(); /*Скрывает четвертое окно*/

        $('#inf1').fadeIn('slow'); /*Медленно показывает первое окно*/
        $('.windows').fadeIn(); /*Показывает весь блок с окнами*/
    });

    /* Кнопка 'Личная Информация' */
    $("#bt2").click(function () {
        $('.wrapper').fadeOut('slow'); /*Скрывает обёртку*/
        $('#inf1').fadeOut(); /*Скрывает первое окно*/
        $('#inf3').fadeOut(); /*Скрывает третье окно*/
        $('#inf4').fadeOut(); /*Скрывает четвертое окно*/

        $('#inf2').fadeIn('slow'); /*Медленно показывает второе окно*/
        $('.windows').fadeIn(); /*Показывает весь блок с окнами*/
    });

    /* Кнопка 'Сложные Пароли' */
    $("#bt3").click(function () {
        $('.wrapper').fadeOut('slow'); /*Скрывает обёртку*/
        $('#inf1').fadeOut(); /*Скрывает первое окно*/
        $('#inf2').fadeOut(); /*Скрывает второе окно*/
        $('#inf4').fadeOut(); /*Скрывает четвертое окно*/

        $('#inf3').fadeIn('slow'); /*Медленно показывает третье окно*/
        $('.windows').fadeIn(); /*Показывает весь блок с окнами*/
    });

    /* Кнопка 'Что можно рассказывать?' */
    $("#bt4").click(function () {
        $('.wrapper').fadeOut('slow'); /*Скрывает обёртку*/
        $('#inf1').fadeOut(); /*Скрывает первое окно*/
        $('#inf2').fadeOut(); /*Скрывает второе окно*/
        $('#inf3').fadeOut(); /*Скрывает третье окно*/

        $('#inf4').fadeIn('slow'); /*Медленно показывает четвертое окно*/
        $('.windows').fadeIn(); /*Показывает весь блок с окнами*/
    });


    /* Кнопка 'На Главную' */
    $('.back').click(function () {
        $('.windows').fadeOut('slow'); /*Скрывает блок с окнами*/
        $('.wrapper').fadeIn('slow'); /*Показывает обёртку*/
    })

});

