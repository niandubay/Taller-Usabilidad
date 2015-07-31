// para cada article que esté dentro de un .parrafos-cont
// voy comparando los heigth y me quedo con el mayor...
$('.parrafos-cont article').each(function() {
    if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
    }
});
// le aplico a todos los article el style="heigth:'maxHeight'"..
$('article').height(maxHeight);
