$(document).ready(function () {
    $("a").mouseenter(function () {
        $(this).css({ "color": "white" })
    })

    let width = Number($('nav').width())
    if (width < 1000) {
            $('#links').hide();
            $('#toggler').show();
            $('#line').hide()
            $('#moon').hide()
            $('#getstart').css({"padding-left":"34vw"})
    }
    else{
        $('#links').show();
    $('#toggler').hide();
}



    $(window).resize(function () {
        width = $('nav').width()
        if (width < 1000) {
            $('#links').hide();
            $('#toggler').show();
            $('#line').hide()
            $('#moon').hide()
            $('#getstart').css({"padding-left":"34vw"})
        }
        else {
            $('#toggler').hide();
            $('#links').show();
            $('#links').css({ "top": '', 'position': '' })
            $('#line').hide();
            $('#dd').css({"display":"block"})
            $('#moon').show()
            $('#getstart').css({"padding-left":"43vw"})
        }
    }
        
    )


$('#toggler').click(function () {

    $('#line').fadeToggle()
    $('#links').toggle(function () {
        $('#dd').css({"display":"contents"})
        $(this).css({ "top": "85px", "position": "absolute","display":"content" })


    }

    )
})



})